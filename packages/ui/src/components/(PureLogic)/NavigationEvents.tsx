import { usePathname, useSearchParams } from "next/navigation";
import { memo, Suspense, useEffect } from "react";

/**
 * this component is copied from next.js doc,
 * see: https://nextjs.org/docs/app/api-reference/functions/use-router#examples
 * @constructor
 */
export function NavigationEventsHook() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`%c NavigationEvent:${url}`, "color:green;font-weight:bold;");
  }, [pathname, searchParams]);

  return null;
}

/**
 * listen for page changes by composing other Client Component hooks
 */
export const NavigationEvents = memo(function () {
  return (
    <Suspense fallback={null}>
      <NavigationEventsHook />
    </Suspense>
  );
});
