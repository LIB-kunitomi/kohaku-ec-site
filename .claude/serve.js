// Local preview: wraps kohaku-shop.html in the same skeleton the Artifact publish adds.
const http = require("http"), fs = require("fs"), path = require("path");
const file = path.join(__dirname, "..", "kohaku-shop.html");
http.createServer((req, res) => {
  const body = fs.readFileSync(file, "utf8");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head><body>${body}</body></html>`);
}).listen(5178, () => console.log("preview on http://localhost:5178"));
