"use client";
/**
 * an error-handling component from next,
 * see:https://nextjs.org/docs/app/building-your-application/routing/error-handling#recovering-from-errors
 * @param error
 * @param reset
 * @constructor
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
