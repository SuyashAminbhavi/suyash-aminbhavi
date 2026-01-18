import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json(
      { error: "Missing URL parameter" },
      { status: 400 }
    );
  }

  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(targetUrl, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    // Get page HTML
    const html = await page.content();
    const $ = cheerio.load(html);

    // Try to extract title and description
    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      $("h1").first().text() ||
      "";

    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      $("p").first().text().trim().slice(0, 160) ||
      "";

    // Take a screenshot (optional)
    const screenshot = await page.screenshot({
      encoding: "base64",
      fullPage: false,
    });
    await browser.close();

    return NextResponse.json({
      title,
      description,
      image: `data:image/png;base64,${screenshot}`,
      url: targetUrl,
    });
  } catch (error: any) {
    console.error("Preview generation failed:", error.message);
    return NextResponse.json(
      { error: "Failed to generate preview" },
      { status: 500 }
    );
  }
}
