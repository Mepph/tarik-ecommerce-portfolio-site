export default function languageRouter(request, context) {
  const url = new URL(request.url);
  const requestedLanguage = url.searchParams.get("lang");
  if (requestedLanguage === "en") return context.next();
  if (requestedLanguage === "tr" || context.geo?.country?.code === "TR") {
    url.pathname = "/tr/";
    url.search = "";
    return url;
  }
  return context.next();
}
export const config = { path: "/" };
