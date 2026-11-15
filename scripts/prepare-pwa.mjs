
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const publicDir = path.resolve("public");
const htmlPath = path.join(dist, "index.html");

if (!fs.existsSync(htmlPath)) {
  throw new Error("Δεν βρέθηκε το dist/index.html. Κάνε πρώτα Expo export.");
}

for (const file of ["manifest.json", "leonfit-icon.png"]) {
  fs.copyFileSync(
    path.join(publicDir, file),
    path.join(dist, file)
  );
}

let html = fs.readFileSync(htmlPath, "utf8");

const pwaTags = `
<link rel="manifest" href="/manifest.json" />
<link rel="icon" type="image/png" href="/leonfit-icon.png" />
<link rel="apple-touch-icon" href="/leonfit-icon.png" />
<meta name="theme-color" content="#090909" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="LEONFIT" />
`;

if (!html.includes('rel="manifest"')) {
  html = html.replace("</head>", `${pwaTags}\n</head>`);
  fs.writeFileSync(htmlPath, html);
}

console.log("LEONFIT PWA ready! 🦁");
