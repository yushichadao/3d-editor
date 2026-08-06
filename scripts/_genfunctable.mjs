// 依据当前 index.html 重新生成 docs/函数表.md：
// 保留旧表中的「汉语名 / 职责 / 模块分组」，仅刷新定义行号；
// 并把旧表中没有的新函数（说明书/便签模块）归入新增模块。
import fs from 'fs';

const ROOT = 'c:/Users/yushi/Documents/trae_projects/3d-editor';
const html = fs.readFileSync(ROOT + '/index.html', 'utf8');
const lines = html.split('\n');
const totalLines = lines.length;

// 1) 提取当前所有顶层 function / async function
const cur = []; // {name, line}
const re = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/;
lines.forEach((ln, i) => {
  const m = ln.match(re);
  if (m) cur.push({ name: m[1], line: i + 1 });
});
const lineOf = new Map(cur.map(f => [f.name, f.line]));

// 2) 解析旧表：模块 -> [{name, zh, duty}]
const oldMd = fs.readFileSync(ROOT + '/docs/函数表.md', 'utf8');
const oldLines = oldMd.split('\n');
const modules = []; // {title, fns:[{name,zh,duty}]}
let curMod = null;
for (const ln of oldLines) {
  const h = ln.match(/^##\s+(.+?)\s*$/);
  if (h) { curMod = { title: h[1], fns: [] }; modules.push(curMod); continue; }
  const row = ln.match(/^\|\s*(\d+)\s*\|\s*([A-Za-z_$][\w$]*)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*$/);
  if (row && curMod) {
    curMod.fns.push({ name: row[2], zh: row[3].trim(), duty: row[4].trim() });
  }
}

// 3) 旧表中出现过的函数集合（用于判断新函数）
const known = new Set();
modules.forEach(m => m.fns.forEach(f => known.add(f.name)));

// 4) 新函数（说明书/便签模块）的汉语名与职责；第 4 项为显式行号（部分函数为嵌套声明，非顶层）
const newFns = [
  ['mdInline', '行内解析', '解析粗体/代码/链接等行内标记为 HTML', 10554],
  ['parseBlocks', '分块解析', '把 markdown 文本切分为标题/段落/代码/引用/列表/表格/分割线等块', 10568],
  ['renderBlock', '渲染块', '将单个 markdown 块渲染为 HTML 字符串', 10590],
  ['unwrapHighlights', '取消高亮', '移除搜索高亮 <mark> 标签并还原原文', 10603],
  ['wrapText', '文本高亮', '在文档中把指定区间文本包裹为高亮 <mark>', 10604],
  ['openManual', '打开说明书', '打开使用说明书弹窗并加载当前语言内容', 10627],
  ['renderNotes', '渲染便签', '渲染说明书便签列表（含全选/批量删除）', 10712],
  ['closeSticky', '关闭便签', '关闭指定浮动便签窗口', 10771],
  ['loadManual', '加载说明书', '按语言异步加载说明书 markdown 并渲染', 10877],
  ['buildToc', '生成目录', '根据标题构建说明书目录导航', 10885],
  ['openGuide', '打开指南', '打开操作指南弹窗', 10902],
];

// 5) 生成新表
let out = [];
out.push('# JavaScript 函数索引');
out.push('');
out.push('> 汇总 `index.html`（约 ' + totalLines + ' 行单文件）中所有顶层 `function` 声明，按代码出现顺序与功能模块分组，列出**函数名、定义行号、汉语名、职责**。行号依据当前代码实际位置，可直接用于在编辑器中跳转。');
out.push('');
out.push('> 全文共收录 **' + cur.length + '** 个顶层函数。');
out.push('');
out.push('---');
out.push('');

let missing = 0;
for (const mod of modules) {
  const fns = mod.fns.filter(f => lineOf.has(f.name));
  missing += (mod.fns.length - fns.length);
  if (fns.length === 0) continue; // 整段函数被移除则跳过该模块
  out.push('## ' + mod.title);
  out.push('');
  out.push('| 行号 | 函数名 | 汉语名 | 职责 |');
  out.push('|------|--------|--------|------|');
  for (const f of fns) {
    out.push('| ' + lineOf.get(f.name) + ' | ' + f.name + ' | ' + f.zh + ' | ' + f.duty + ' |');
  }
  out.push('');
}

// 新增模块：说明书与便签系统
out.push('## 二十五、说明书与便签系统');
out.push('');
out.push('| 行号 | 函数名 | 汉语名 | 职责 |');
out.push('|------|--------|--------|------|');
for (const [name, zh, duty, line] of newFns) {
  const ln = line != null ? line : (lineOf.has(name) ? lineOf.get(name) : '?');
  out.push('| ' + ln + ' | ' + name + ' | ' + zh + ' | ' + duty + ' |');
}
out.push('');

out.push('---');
out.push('');
out.push('> 说明：本表由脚本依据 `index.html` 当前行号自动刷新；模块分组与汉语释义沿用人工维护版本，新增的「说明书与便签系统」模块为本次补录。若某函数被重命名/删除，该行将不再出现。');

fs.writeFileSync(ROOT + '/docs/函数表.md', out.join('\n'));
console.log('total lines:', totalLines, '| functions:', cur.length, '| dropped from old table:', missing);
