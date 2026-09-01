const fs = require('fs');
const https = require('https');

https.get('https://www.parientemma.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = new Set();
    const regex = /https?:\/\/[^"'\s\)]+\.(?:png|jpg|jpeg|gif|svg|webp)/gi;
    let match;
    while ((match = regex.exec(data)) !== null) {
      urls.add(match[0]);
    }
    console.log(Array.from(urls).join('\n'));
  });
}).on('error', (err) => console.log('Error: ' + err.message));
