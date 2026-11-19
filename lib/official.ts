/** Official sources cited by the licence guides. Re-check these pages before changing any rule or fee. */
export const OFFICIAL = {
  learners: {
    href: 'https://www.gov.za/services/driving-licence/apply-learners-licence',
    label: 'South African Government: Apply for a learner’s licence',
  },
  driving: {
    href: 'https://www.gov.za/services/driving-licence/apply-driving-licence',
    label: 'South African Government: Apply for a driving licence (licence codes)',
  },
  natis: { href: 'https://www.natis.gov.za/', label: 'NaTIS: National Traffic Information System' },
  enatis: { href: 'https://online.natis.gov.za/#/', label: 'eNaTIS online services' },
  kzn: {
    href: 'http://www.kzntransport.gov.za/licencing/licences/learners_licence.htm',
    label: 'KZN Department of Transport: procedure when applying for a learner’s licence',
  },
  manual: {
    href: 'https://www.natis.gov.za/media/com_natisdownloads/files/1_Rules_of_the_Road_v100_Jun_2012-20260713-173225.pdf',
    label: 'NaTIS: SA Learner Driver Manual, Rules of the Road (learner’s licence codes and conditions)',
  },
  passMarks: {
    href: 'https://www.gov.za/sites/default/files/gcis_document/201409/28446b.pdf',
    label: 'Government Gazette 28446: learner’s licence test pass requirements',
  },
} as const

export const OFFICIAL_REVIEWED = '19 November 2026'
