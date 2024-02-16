/**
 * link button using tailwind.css
 * By at 2024/2/16
 */

import classNames from "classnames";
import React, { memo } from "react";

type Props = React.RefAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

export const LinkButton = memo<Props>(function ({ className, children }) {
  return (
    <button className={classNames("ui-underline ui-rounded", className)}>
      {children}
    </button>
  );
});
