import React from "react";
import { AppProps } from "next/app";
import DashboardLayout from "../layouts/MainLayout/index";
import "../styles/globals.css";
import localFont from "next/font/local";
import { ConfigProvider } from "antd";
import { useRouter } from "next/router";

const dsrFont = localFont({
  src: "../fonts/IRANSans-web.woff",
  variable: "--font-iransans",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return (
    <div className={`${dsrFont.className}`}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "var(--font-iransans)",
          },
          hashed: false,
        }}
      >
        {isDashboardPage ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ConfigProvider>
    </div>
  );
}

export default MyApp;
