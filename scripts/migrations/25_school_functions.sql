-- ================================================================
-- Sathuthuka Driving School — database functions used by the app
--
-- has_active_access()        : RLS helper — does the signed-in user hold a live grant?
-- grant_course_access()      : service-role only; upserts an access grant after payment
-- handle_driving_schools_updated_at() : keeps driving_schools.updated_at fresh
-- Safe to re-run.
-- ================================================================

create or replace function public.has_active_access()
returns boolean
language sql
stable
security definer
set search_path to 'public'
as $function$
  select exists (
    select 1 from public.access_grants
    where user_id = auth.uid()
      and (expires_at is null or expires_at > now())
  );
$function$;

create or replace function public.grant_course_access(
  p_user_id     uuid,
  p_checkout_id text default null,
  p_source      text default 'yoco_webhook'
)
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  -- Upsert access_grants: re-payment extends access rather than duplicating it.
  insert into public.access_grants (user_id, expires_at, source, yoco_checkout_id, created_at, updated_at)
  values (p_user_id, now() + interval '60 days', p_source, p_checkout_id, now(), now())
  on conflict (user_id) do update
    set expires_at       = greatest(public.access_grants.expires_at, excluded.expires_at),
        source           = excluded.source,
        yoco_checkout_id = coalesce(excluded.yoco_checkout_id, public.access_grants.yoco_checkout_id),
        updated_at       = now();
end;
$function$;

revoke execute on function public.grant_course_access(uuid, text, text) from public, anon, authenticated;
grant  execute on function public.grant_course_access(uuid, text, text) to service_role;

create or replace function public.handle_driving_schools_updated_at()
returns trigger
language plpgsql
as $function$
begin
  new.updated_at = now();
  return new;
end;
$function$;

drop trigger if exists driving_schools_updated_at on public.driving_schools;
create trigger driving_schools_updated_at
  before update on public.driving_schools
  for each row execute function public.handle_driving_schools_updated_at();
