/**
 * primary button
 * By  at 2024/1/2
 */

import classNames from "clsx";
import React, { memo } from "react";
import styles from "./index.module.scss";

type Props = React.RefAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

export const PrimaryButton = memo<Props>(function ({ className, ...args }) {
  return (
    <button className={classNames(styles.primary, className)} {...args}>
      {args.children}
    </button>
  );
});
