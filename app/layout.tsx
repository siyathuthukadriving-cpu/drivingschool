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
import { SCHOOL_NAME, SITE_URL } from '@/lib/school'

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

// Analytics, ads and search-console verification belong to the site owner: each is switched on
// only when its own ID is set in the environment, so no other business's accounts are embedded.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SCHOOL_NAME} — Driving Made Easy`,
        template: `%s | ${SCHOOL_NAME}`,
    },
    description: "Thompho’s Driving Academy in Sunnyside, Pretoria. Patient instructors, K53 test preparation, and friendly driving lessons. Book on WhatsApp or call today.",
    robots: { index: true, follow: true },
    keywords: [
        "Thompho’s Driving Academy", "driving school Sunnyside", "driving lessons Pretoria",
        "K53 test preparation Pretoria", "beginner driving lessons Pretoria", "driving school Pretoria",
        "learners licence test", "K53 learners licence", "learners licence practice test",
        "K53 test questions", "learners licence questions South Africa",
        "K53 road signs", "learners licence study guide", "how to pass learners licence",
        "Code 8 learners licence", "Code 10 learners licence", "free learners licence test online",
        "K53 questions and answers", "learners licence test South Africa",
        "learners licence road signs", "South African learner driver",
    ],
    openGraph: {
        siteName: SCHOOL_NAME,
        locale: 'en_ZA',
        type: 'website',
        title: `${SCHOOL_NAME} — Driving Made Easy`,
        description: "Patient, professional driving lessons in Sunnyside, Pretoria. Book your lesson on WhatsApp or call us today.",
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SCHOOL_NAME} — Driving Made Easy`,
        description: "Patient, professional driving lessons in Sunnyside, Pretoria. Book your lesson on WhatsApp or call us today.",
    },
    ...(GOOGLE_VERIFICATION ? { verification: { google: GOOGLE_VERIFICATION } } : {}),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <head>
                      {GA_ID && (
                            <>
                                  {/* Google tag (gtag.js) */}
                                  <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
                                  <script
                                        dangerouslySetInnerHTML={{
                                              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
                                        }}
                                  />
                            </>
                      )}

                      {GTM_ID && (
                            <script
                                  dangerouslySetInnerHTML={{
                                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
                                  }}
                            />
                      )}

                      {META_PIXEL_ID && (
                            <>
                                  <script
                                        dangerouslySetInnerHTML={{
                                              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
                                        }}
                                  />
                                  <noscript>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" />
                                  </noscript>
                            </>
                      )}

                      {ADSENSE_CLIENT && (
                            <>
                                  <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
                                  <script
                                        async
                                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
                                        crossOrigin="anonymous"
                                  />
                            </>
                      )}
                </head>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}>
                      {GTM_ID && (
                            <noscript>
                                  <iframe
                                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                                        height="0"
                                        width="0"
                                        style={{ display: 'none', visibility: 'hidden' }}
                                  />
                            </noscript>
                      )}
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
