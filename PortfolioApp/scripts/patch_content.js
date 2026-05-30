const fs = require('fs');
const contentPath = 'C:\\Users\\hasan\\Masaüstü\\Bussiness\\Portfolio\\PortfolioApp\\src\\lib\\content.ts';
let code = fs.readFileSync(contentPath, 'utf8');

const newCards = fs.readFileSync('C:\\Users\\hasan\\Masaüstü\\Bussiness\\Portfolio\\PortfolioApp\\scripts\\cards_output.json', 'utf8');

const newStr = `export const eventCards: EventCard[] = ${newCards};`;

const startIdx = code.indexOf('export const eventCards: EventCard[] = [');
const endIdx = code.indexOf('];', startIdx) + 2;

if (startIdx !== -1 && endIdx !== -1) {
  code = code.substring(0, startIdx) + newStr + code.substring(endIdx);
  fs.writeFileSync(contentPath, code);
  console.log("Patched successfully");
} else {
  console.log("Could not find block");
}
