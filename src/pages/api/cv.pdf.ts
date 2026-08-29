import type { APIRoute } from "astro";
import { defaultLanguage, isSupportedLanguage } from "../../i18n/translations";

function resolveVariant(raw: string | null) {
  return raw === "short" ? "short" : "full";
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const requestedLang = url.searchParams.get("lang")?.toLowerCase();
  const variant = resolveVariant(url.searchParams.get("variant"));
  const lang = isSupportedLanguage(requestedLang) ? requestedLang : defaultLanguage;

  const target = new URL(url);
  target.pathname = `/${lang}/cv/print`;
  target.search = "";
  target.searchParams.set("variant", variant);

  try {
    const [chromiumModule, playwrightModule] = await Promise.all([
      import(/* @vite-ignore */ "@sparticuz/chromium"),
      import(/* @vite-ignore */ "playwright-core"),
    ]);

    const chromium = chromiumModule.default ?? chromiumModule;
    const playwrightChromium = (playwrightModule as typeof import("playwright-core")).chromium;

    chromium.setHeadlessMode?.(true);
    chromium.setGraphicsMode?.(false);

    const executablePath = await chromium.executablePath();

    const browser = await playwrightChromium.launch({
      args: chromium.args,
      executablePath: executablePath || undefined,
      headless: true,
    });

    const page = await browser.newPage({ viewport: { width: 1440, height: 2000 } });
    await page.goto(target.toString(), { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    await browser.close();

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="FerranHernandez_CV_${lang}_${variant}.pdf"`,
        "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("CV PDF generation failed", error);
    return new Response("Failed to generate CV PDF", { status: 500 });
  }
};
