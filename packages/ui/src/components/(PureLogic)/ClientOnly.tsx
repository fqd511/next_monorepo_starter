/**
 * component only render on client-side
 * By   at 2024/1/22
 */

import React, { memo } from "react";

interface Props {
  children: React.ReactNode;
}

export const ClientOnly = memo<Props>(function ({ children }) {
  return typeof window !== "undefined" && children;
});
