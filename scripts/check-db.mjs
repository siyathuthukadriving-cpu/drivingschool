import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function check() {
  const { data: courses } = await supabase.from('courses').select('*')
  console.log('Courses in database:', courses)

  const { data: counts, error } = await supabase
    .from('quiz_questions')
    .select('test_number')
    .eq('course_id', 3)
  
  if (error) {
    console.error('Error fetching questions:', error)
  } else {
    const grouped = {}
    counts.forEach(q => {
      grouped[q.test_number] = (grouped[q.test_number] || 0) + 1
    })
    console.log('Question counts for Code 10 (course_id = 3) by test number:', grouped)
  }
}

check()
