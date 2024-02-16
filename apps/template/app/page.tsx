"use client";
import { LinkButton, PrimaryButton } from "@deps/ui";
import styles from "./index.module.scss";

export default function Page(): JSX.Element {
  return (
    <div className={styles.homepage}>
      <h2>homepage</h2>
      <PrimaryButton>scss button</PrimaryButton>
      <LinkButton> tailwindcss button</LinkButton>
    </div>
  );
}
