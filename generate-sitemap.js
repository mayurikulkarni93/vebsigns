// generate-sitemap.js
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: "https://vebsigns.com" });

streamToPromise(
  links.reduce((sm, link) => {
    sm.write(link);
    return sm;
  }, sitemap)
)
  .then((data) => {
    sitemap.end();
    writeFileSync("./dist/sitemap.xml", data.toString());
    console.log("✅ Sitemap generated successfully!");
  })
  .catch(console.error);
