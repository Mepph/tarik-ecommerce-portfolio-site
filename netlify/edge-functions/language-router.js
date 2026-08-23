export default function languageRouter(request, context) {
  const url = new URL(request.url);
  const requestedLanguage = url.searchParams.get("lang");
  const language = requestedLanguage === "tr" || requestedLanguage === "en"
    ? requestedLanguage
    : context.geo?.country?.code === "TR"
      ? "tr"
      : "en";

  url.pathname = `/${language}/`;
  return url;
}

export const config = { path: "/" };
