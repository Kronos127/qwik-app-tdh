import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png+svg+xml" href="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" />

      {head.meta.map((m) => (
      <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
      <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
      <style
        key={s.key}
        {...s.props}
        {...(s.props?.dangerouslySetInnerHTML
        ? {}
        : { dangerouslySetInnerHTML: s.style })}
      />
      ))}

      {head.scripts.map((s) => (
      <script
        key={s.key}
        {...s.props}
        {...(s.props?.dangerouslySetInnerHTML
        ? {}
        : { dangerouslySetInnerHTML: s.script })}
      />
      ))}
    </>
  );
});
