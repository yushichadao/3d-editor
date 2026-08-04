import fs from 'fs';
function ex(f){const s=fs.readFileSync(f,'utf8');const i=s.indexOf('= {');const st=s.indexOf('{',i);let d=0,e=-1;for(let k=st;k<s.length;k++){if(s[k]==='{')d++;else if(s[k]==='}'){d--;if(d===0){e=k;break;}}}return eval('('+s.slice(st,e+1)+')');}
const html=fs.readFileSync('index.html','utf8');
const zm=html.match(/const ZH_CN = (\{[\s\S]*?\});/);
const zh=eval('('+zm[1]+')');
const ja=ex('language/ja.js'), en=ex('language/en.js'), tw=ex('language/zh-TW.js');
const keys=['fontYaHei','fontSimSun','fontKaiTi','fontSimHei','fontFangSong'];
console.log('font keys in ZH_CN:', keys.every(k=>k in zh), '| en:', keys.every(k=>k in en), '| ja:', keys.every(k=>k in ja), '| zh-TW:', keys.every(k=>k in tw));
console.log('  ja values:', keys.map(k=>k+'='+ja[k]).join(', '));
// re-scan hardcoded chinese in body (excluding script/title/fs-handled)
const body=html.slice(html.indexOf('<body>'), html.indexOf('</body>'));
const re=/<([a-zA-Z0-9]+)(\s[^>]*?)?>([^<]*[\u4e00-\u9fff][^<]*)</g;
let m, out=[];
while((m=re.exec(body))){const tag=m[1];const attrs=m[2]||'';if(/data-i18n/.test(attrs))continue;out.push(`<${tag} ${attrs.trim()}> => "${m[3]}"`);}
console.log('\nRemaining hardcoded-Chinese display elements (excluding script):', out.length);
out.forEach(o=>console.log('  '+o));
