// Builds the GitHub Pages site: wraps kohaku-shop.html in a full HTML document
// (the same skeleton the Claude Artifact publish adds) and writes _site/index.html.
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "kohaku-shop.html"), "utf8");
// <title>, <meta>, <link> and <style> at the top of the file go into <head>; the rest is the page body.
const cut = src.search(/\r?\n<div/);
const head = src.slice(0, cut).trim(), body = src.slice(cut).trim();
const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
${head}
</head>
<body>
${body}
</body>
</html>
`;
const out = path.join(root, "_site");
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), html);
fs.writeFileSync(path.join(out, ".nojekyll"), "");
console.log("built _site/index.html");
