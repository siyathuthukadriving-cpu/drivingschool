'use client'

const CONTENT: Record<string, { heading: string; paragraphs: string[] }> = {
  en: {
    heading: 'Welcome to Thompho’s Driving Academy',
    paragraphs: [
      'Thompho’s Driving Academy in Sunnyside, Pretoria helps learners gain confidence behind the wheel through structured lessons, patient instructors, and smooth support from booking through to test preparation.',
      'From your very first lesson to the day you pass your test, our friendly instructors are with you every step of the way — turning nervous beginners into safe, licensed drivers.',
      'Our online K53 practice platform gives you exam-style practice tests covering Rules of the Road, Road Signs and Vehicle Controls, plus a study guide, Live Notes and videos.',
      'Visit us at 81 Celliers St, Sunnyside, Pretoria (Adverto Tower), call 012 772 1616 or WhatsApp +27 64 681 4176.',
    ],
  },
  zu: {
    heading: 'Siyakwamukela ku-Thompho’s',
    paragraphs: [
      'I-Thompho’s yinkundla yeinthanethi ethembekile yaseNingizimu Afrika yokulungiselela ukuhlolwa kweLayisensi Yokufunda. Sisiza izinkulungwane zabafundi ukuthi baphumelele isivivinyo sabo se-K53 ngokokuqala.',
      'Inkundla yethu ihlinzeka ngezivivinyo zokuprakthiza ezihlanganisa Imithetho Yomgwaqo, Izimpawu Zomgwaqo, kanye Nokulawula Izimoto — kuhambisana nekharikhulamu esemthethweni ye-K53.',
      'Ngezifundo ezisemhlabeni wonke ku-YouTube ngo-8 ntambama, Amanothi Okuphila anenemininingwane, kanye nezivivinyo zokuprakthiza ezingenamkhawulo, sikunika konke okudingayo.',
      'Noma ngabe ulungiselela ikhodi 8 noma ikhodi 10, i-Thompho’s ikubhekelele.',
    ],
  },
  xh: {
    heading: 'Wamkelekile ku-Thompho’s',
    paragraphs: [
      'I-Thompho’s liqonga le-intanethi elithembekileyo loMzantsi Afrika lokulungiselela uvavanyo lweLayisenisi yokuFunda. Sinceda amawaka abafundi ukuba baphumelele uviwo lwabo lwe-K53 ngokuqala.',
      'Iqonga lethu linikeza uvavanyo lokuziqhelanisa olupheleleyo olugubungela iMithetho yeNdlela, iiMpawu zeNdlela, noLawulo lweZithuthi.',
      'Ngezifundo eziphilayo ze-YouTube ngo-8 ngokuhlwa, amaQaphelo aPhilayo aneenkcukacha, novavanyo lokuziqhelanisa olungenamkhawulo, sikunika yonke into oyidingayo.',
      'Nokuba ulungiselela ikhowudi ye-8 okanye ikhowudi ye-10, i-Thompho’s ikugubungele.',
    ],
  },
  af: {
    heading: 'Welkom by Thompho’s',
    paragraphs: [
      'Thompho’s is Suid-Afrika se betroubare aanlyn platform vir Leerlinglisensie-toetsvoorbereiding. Ons help duisende leerders om hul K53-eksamen die eerste keer te slaag.',
      'Ons platform bied omvattende oefentoetse wat Reëls van die Pad, Padtekens en Voertuigkontroles dek — in lyn met die amptelike K53-kurrikulum.',
      'Met daaglikse regstreekse YouTube-sessies om 20:00, gedetailleerde Lewendige Notas en onbeperkte oefenvraestelle, gee ons jou alles wat jy nodig het.',
      'Of jy nou vir ’n Kode 8 of Kode 10 leerlinglisensie voorberei, Thompho’s het jou gedek.',
    ],
  },
  st: {
    heading: 'Re o amohela ho Thompho’s',
    paragraphs: [
      'Thompho’s ke setsha sa inthanete se tshepehang sa Afrika Borwa sa ho itokisetsa tlhahlobo ya Laesense ya ho Ithuta. Re thusa diketekete tsa baithuti ho feta tlhahlobo ya bona ya K53 ka lekgetlo la pele.',
      'Setsha sa rona se fana ka ditlhahlobo tsa boikwetliso tse akaretsang Melao ya Tsela, Matshwao a Tsela, le Taolo ya Dikoloi.',
      'Ka dithuto tse phetseng tsa YouTube ka 8 mantsibuya, Lintlha tse Phelang tse nang le dintlha, le ditlhahlobo tsa boikwetliso tse sa lekanyetswang, re o fa tsohle tseo o di hlokang.',
      'Leha o itokisetsa khoutu ya 8 kapa khoutu ya 10, Thompho’s o o sireleleditse.',
    ],
  },
  tn: {
    heading: 'Re go amogela go Thompho’s',
    paragraphs: [
      'Thompho’s ke setlhogo sa inthanete se se ikanyegang sa Aforika Borwa sa go ipaakanyetsa Teko ya Laesense ya go Ithuta. Re thusa dikete tsa baithuti go feta teko ya bone ya K53 ka lekgetlo la ntlha.',
      'Setlhogo sa rona se fana ka diteko tsa go ikatisa tse di akaretsang Melao ya Tsela, Matshwao a Tsela, le Taolo ya Dikoloi.',
      'Ka dithuto tse di tshelang tsa YouTube ka 8 maitseboa, Dintlha tse di Tshelang tse di nang le dintlha, le diteko tsa go ikatisa tse di sa lekanyetswang, re go fa tsotlhe tse o di tlhokang.',
      'Le fa o ipaakanyetsa khoutu ya 8 kgotsa khoutu ya 10, Thompho’s o go sireleditse.',
    ],
  },
}

export default function TranslatableAbout({ lang }: { lang: string }) {
  const c = CONTENT[lang] || CONTENT.en

  return (
    <article className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{c.heading}</h2>
      {c.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {p}
        </p>
      ))}
    </article>
  )
}
