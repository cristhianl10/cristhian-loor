import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const root = new URL('../src/', import.meta.url);
const files = [];
async function walk(directory) { for (const entry of await readdir(directory, { withFileTypes: true })) { const path = join(directory, entry.name); if (entry.isDirectory()) await walk(path); else if (/\.(jsx?|css)$/.test(entry.name)) files.push(path); } }
await walk(root.pathname);
const failures = [];
for (const file of files) { const source = await readFile(file, 'utf8'); for (const pattern of [/__PORTFOLIO_/, /portfolio-cristhian-loor\.vercel\.app/]) if (pattern.test(source)) failures.push(`${file}: ${pattern}`); }
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`lint: ${files.length} source files checked`);
