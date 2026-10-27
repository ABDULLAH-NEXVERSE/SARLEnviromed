const fs = require('fs');
const html = fs.readFileSync('index (3).html', 'utf8');
const startIdx = html.indexOf('<section class="hero">');
const endIdx = html.indexOf('</section>', startIdx) + '</section>'.length;
const heroHtml = html.slice(startIdx, endIdx);
fs.writeFileSync('hero_exact.txt', heroHtml, 'utf8');
console.log('Hero extracted successfully, length:', heroHtml.length);
