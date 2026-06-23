const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 8080;
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".otf": "font/otf",
  ".md": "text/markdown; charset=utf-8",
};

function send(res, status, filePath) {
  const ext = path.extname(filePath);
  res.writeHead(status, { "Content-Type": types[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const requested = path.join(root, urlPath === "/" ? "index.html" : urlPath);
    const safe = requested.startsWith(root);

    if (safe && fs.existsSync(requested) && fs.statSync(requested).isFile()) {
      send(res, 200, requested);
      return;
    }

    if (urlPath.startsWith("/project/")) {
      send(res, 200, path.join(root, "index.html"));
      return;
    }

    send(res, 200, path.join(root, "index.html"));
  })
  .listen(port, host, () => {
    console.log(`City Garden Guys app running at http://${host}:${port}`);
  });
