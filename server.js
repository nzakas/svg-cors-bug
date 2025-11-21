const http = require('http');

const PORT = 3000;

// Simple 1x1 transparent PNG as placeholder
const PLACEHOLDER_IMAGE = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const server = http.createServer((req, res) => {
  // Check if the request is for /favicon
  if (req.url === '/favicon') {
    // Check for Origin header
    if (!req.headers.origin) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden: No Origin header');
      return;
    }

    // Return the placeholder image with CORS headers
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Access-Control-Allow-Origin': req.headers.origin,
      'Access-Control-Allow-Credentials': 'true'
    });
    res.end(PLACEHOLDER_IMAGE);
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Image server running at http://localhost:${PORT}/`);
});
