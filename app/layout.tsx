import type { Metadata } from "next";
import { Noto_Sans_KR, Song_Myung } from "next/font/google";
import { CartProvider } from "./components/CartContext";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const songMyung = Song_Myung({
  weight: "400",
  variable: "--font-song-myung",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karam-website-nine.vercel.app"),
  title: {
    default: "Karam · 테라리움 스튜디오",
    template: "%s · Karam",
  },
  description:
    "카람은 작은 유리 프레임 안에 자연을 담아 일상으로 들여옵니다. 이끼와 돌, 천천히 자라는 고사리로 빚은 살아 있는 풍경.",
  keywords: ["Karam", "카람", "테라리움", "terrarium", "이끼", "식물", "오브제"],
  openGraph: {
    title: "Karam · 테라리움 스튜디오",
    description: "자연을 들여오는 창 — 작은 유리 프레임 안에 자연을 담아 일상 속으로.",
    type: "website",
    locale: "ko_KR",
    siteName: "Karam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${notoSansKr.variable} ${songMyung.variable}`}
    >
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
