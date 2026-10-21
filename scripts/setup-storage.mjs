import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const BUCKET = 'resources'
const FOLDERS = [
  'code8/shared/.gitkeep',
  'code8/test1/.gitkeep',
]

async function createFolders() {
  console.log(`\nCreating folder structure in bucket: "${BUCKET}"\n`)

  for (const path of FOLDERS) {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .upload(path, new Blob(['']), { upsert: true })

    const folder = path.replace('/.gitkeep', '/')
    if (error) {
      console.error(`  ✗ ${folder}  →  ${error.message}`)
    } else {
      const publicUrl = supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl
      const folderUrl = publicUrl.replace('.gitkeep', '')
      console.log(`  ✓ ${folder}`)
      console.log(`    URL: ${folderUrl}`)
    }
  }

  console.log('\nDone.\n')
}

createFolders()
