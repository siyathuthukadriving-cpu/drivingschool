import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const BUCKET = 'Code 10 Memo Slide Show'
const FOLDER = 'code 10 Memo Part 1'

const { data, error } = await supabase.storage
  .from(BUCKET)
  .list(FOLDER, { limit: 500, sortBy: { column: 'name', order: 'asc' } })

if (error) {
  console.error('Error:', error.message)
  process.exit(1)
}

console.log(`Files in "${BUCKET}/${FOLDER}": ${data.length}`)
data.forEach(f => {
  console.log(`  ${f.name}`)
})
