/**
 * 需要依赖 window size 执行的回调
 * By   @2024/2/1
 */
import { isServer } from "@deps/core";
import { useEffect } from "react";

export function useDependWindowSize(callback: () => void) {
  useEffect(() => {
    if (!isServer) {
      callback();
      window.addEventListener("resize", callback);
      window.addEventListener("load", callback);
    }
    return () => {
      window.removeEventListener("resize", callback);
      window.removeEventListener("load", callback);
    };
  }, [callback]);
}
