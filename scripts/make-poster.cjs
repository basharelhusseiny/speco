const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <body>
        <video id="v" src="http://localhost:3000/assets/video/ContactUsPageHeroMobile.MP4" crossOrigin="anonymous" muted playsinline></video>
        <canvas id="c" width="1080" height="1920"></canvas>
        <script>
          const v = document.getElementById('v');
          const c = document.getElementById('c');
          v.onloadeddata = () => {
            v.currentTime = 0.5;
          };
          v.onseeked = () => {
            const ctx = c.getContext('2d');
            ctx.drawImage(v, 0, 0, 1080, 1920);
            const data = c.toDataURL('image/jpeg', 0.85);
            fetch('/save', { method: 'POST', body: data }).then(() => {
              document.body.innerHTML = '<h2>Poster saved!</h2>';
            });
          };
          v.load();
        </script>
      </body>
      </html>
    `);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const base64Data = body.replace(/^data:image\/jpeg;base64,/, '');
      const outPath = path.join(__dirname, '..', 'public', 'assets', 'video', 'contact-hero-poster-mobile.jpg');
      fs.writeFileSync(outPath, Buffer.from(base64Data, 'base64'));
      console.log('Saved contact-hero-poster-mobile.jpg successfully!');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
      setTimeout(() => process.exit(0), 500);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4567, () => {
  console.log('Poster server listening on http://localhost:4567');
});
