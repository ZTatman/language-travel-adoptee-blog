import type { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          // REQUIRED: Accepts an async function OR string
          url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview`,
          // Optional: sets default size
          defaultSize: 'desktop',
          // Optional: add reload button or reload on new document revisions
          reload: {
            button: true
          },
          // Optional: Display a spinner while the iframe is loading
          loader: true, // boolean | string. default `undefined`. If a string is provided, it will be display below the spinner (e.g. Loading…)
          // Optional: Pass attributes to the underlying `iframe` element:
          // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          attributes: {},
        })
        .title("Preview")
    ]);
  }
};
