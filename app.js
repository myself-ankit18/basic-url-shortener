import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

const dataFile = path.join("data", "links.json");

const loadLinks = async () => {
  try {
    const data = await readFile(dataFile, "utf-8");
    return data.trim() === "" ? {} : JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(dataFile, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(dataFile, JSON.stringify(links));
};

const server = createServer(async (req, res) => {
  const links = await loadLinks();

  if (req.method === "GET" && req.url === "/") {
    try {
      const data = await readFile(path.join("public", "index.html"));
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    } catch (error) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("404 not found!!");
    }
  } else if (req.method === "GET" && req.url === "/links") {
    const links = await loadLinks();
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(links))
  } else


  if (req.method === "POST" && req.url === "/shorten") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const { url, shortCode } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { "content-type": "text/html" });
          return res.end("URL is required!");
        }

        const finalCode = shortCode || crypto.randomBytes(4).toString("hex");

        if (links[finalCode]) {
          res.writeHead(400, { "content-type": "text/html" });
          return res.end("Short Code already Exists!!");
        }

        links[finalCode] = url;
        await saveLinks(links);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ success: true, shortCode: finalCode }));
      } catch (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("Internal Server Error");
      }
    });
  } else {
    const links = await loadLinks();
    const shortCode = req.url.slice(1);
    if (links[shortCode]) {
      res.writeHead(302, { location: links[shortCode] })
      return res.end();
    }
    res.writeHead(302, { "content-type":"text/plain" })
    return res.end("error");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
