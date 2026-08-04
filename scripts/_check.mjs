import fs from 'fs';
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!m) { console.error('NO MODULE FOUND'); process.exit(2); }
fs.writeFileSync('_mod_extract.mjs', m[1]);
console.log('extracted bytes:', m[1].length);
