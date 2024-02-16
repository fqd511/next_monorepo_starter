import { PageTitle } from "@/helper/server";
import "@deps/ui/styles";
import "dayjs/locale/zh-cn";
import "../styles/main.scss"; // local base styles
import "../styles/tailwind.css"; // local tailwind
import type { Metadata } from "next";
import dayjs from "dayjs";
import classNames from "clsx";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";

dayjs.locale("zh-cn");

// font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: PageTitle,
  description: "Build a brighter future for everyone~",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={styles.root}>
      <body className={classNames(inter.className, styles.root)}>
        {children}
      </body>
    </html>
  );
}
