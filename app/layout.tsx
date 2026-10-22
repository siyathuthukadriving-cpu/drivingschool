import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReferralCapture from "@/components/ReferralCapture";
import CookieBanner from "@/components/CookieBanner";
import LiveSessionPopup from "@/components/LiveSessionPopup";
import TestPrepPopup from "@/components/TestPrepPopup";
import K53UnpackedPopup from "@/components/K53UnpackedPopup";
import CourseIntroPopup from "@/components/CourseIntroPopup";
import YoutubeLiveSessionPopup from "@/components/YoutubeLiveSessionPopup";
import YoutubeRecordingPopup from "@/components/YoutubeRecordingPopup";
import FreePromoBanner from "@/components/FreePromoBanner";
import FreePromoPopup from "@/components/FreePromoPopup";
import HideOnLanding from "@/components/HideOnLanding";
import { SITE_URL } from '@/lib/school'

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Sathuthuka Driving School — Code 8, Code 10 & Learner's Licence in KwaZulu-Natal",
        template: '%s | Sathuthuka Driving School',
    },
    description: "Teaching people across KwaZulu-Natal to drive for a generation. Code 8 lessons, Code 10 truck training, and learner's licence preparation. Learn to drive. Learn to arrive.",
    keywords: [
        "Sathuthuka Driving School", "driving school Verulam", "driving lessons KwaZulu-Natal",
        "Code 8 driving lessons", "Code 10 truck training", "Code 14 driving school",
        "learners licence test", "K53 learners licence", "learners licence practice test",
        "K53 test questions", "learners licence questions South Africa",
        "K53 road signs", "learners licence study guide", "how to pass learners licence",
        "Code 8 learners licence", "Code 10 learners licence", "free learners licence test online",
        "K53 questions and answers", "learners licence test South Africa",
        "learners licence road signs", "South African learner driver",
    ],
    openGraph: {
        siteName: "Sathuthuka Driving School",
        locale: 'en_ZA',
        type: 'website',
        title: "Sathuthuka Driving School — Learn to Drive. Learn to Arrive.",
        description: "Code 8 lessons, Code 10 truck training and learner's licence preparation across KwaZulu-Natal. Over 30 years of teaching people to drive.",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sathuthuka Driving School — Learn to Drive. Learn to Arrive.",
        description: "Code 8 lessons, Code 10 truck training and learner's licence preparation across KwaZulu-Natal.",
    },
    verification: {
        google: "6uUYkLVNLPmMYVkSoW2wSlMcyOyA5MdR2vQxRUOUp7c",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <head>
                      {/* Google tag (gtag.js) — GA4 G-ZZVWLTP51S */}
                      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZVWLTP51S" />
                      <script
                            dangerouslySetInnerHTML={{
                                  __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZZVWLTP51S');`,
                            }}
                      />
                      {/* End Google tag (gtag.js) */}

                      {/* Google Tag Manager */}
                      <script
                            dangerouslySetInnerHTML={{
                                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M995P8CW');`,
                            }}
                      />
                      {/* End Google Tag Manager */}

                      {/* Meta Pixel */}
                      <script
                            dangerouslySetInnerHTML={{
                                  __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1492132475472276');fbq('track','PageView');`,
                            }}
                      />
                      <noscript>
                            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1492132475472276&ev=PageView&noscript=1" alt="" />
                      </noscript>
                      {/* End Meta Pixel */}

                      {/* Google AdSense */}
                      <meta name="google-adsense-account" content="ca-pub-4650201068372958" />
                      <script
                            async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4650201068372958"
                            crossOrigin="anonymous"
                      />
                      {/* End Google AdSense */}
                </head>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}>
                      {/* Google Tag Manager (noscript) */}
                      <noscript>
                            <iframe
                                  src="https://www.googletagmanager.com/ns.html?id=GTM-M995P8CW"
                                  height="0"
                                  width="0"
                                  style={{ display: 'none', visibility: 'hidden' }}
                            />
                      </noscript>
                      {/* End Google Tag Manager (noscript) */}
                        <Suspense fallback={null}>
                                  <ReferralCapture />
                        </Suspense>
                        <HideOnLanding><FreePromoBanner /></HideOnLanding>
                        <Navbar />
                  {children}
                        <Footer />
                        <CookieBanner />
                        <HideOnLanding><FreePromoPopup /></HideOnLanding>
                        <HideOnLanding><TestPrepPopup /></HideOnLanding>
                        <HideOnLanding><LiveSessionPopup /></HideOnLanding>
                        <HideOnLanding><K53UnpackedPopup /></HideOnLanding>
                        <HideOnLanding><CourseIntroPopup /></HideOnLanding>
                        <HideOnLanding><YoutubeLiveSessionPopup /></HideOnLanding>
                        <HideOnLanding><YoutubeRecordingPopup /></HideOnLanding>
                </body>
          </html>
        );
}
