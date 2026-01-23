import { htmlToText } from "html-to-text";

export const htmlToPlainText = (html = "") => {
  if (!html) return "";

  return htmlToText(html, {
    wordwrap: false,
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
    ],
  })
    .replace(/\s+/g, " ")
    .trim();
};
