const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hasan\\Masaüstü\\Bussiness\\Portfolio\\cards';
const destDir = 'C:\\Users\\hasan\\Masaüstü\\Bussiness\\Portfolio\\PortfolioApp\\public\\images\\cards\\cutouts';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));

const newCards = [];

files.forEach((file, index) => {
  const oldPath = path.join(srcDir, file);
  const ext = path.extname(file);
  let baseName = path.basename(file, ext);
  
  // Clean up basename for display
  baseName = baseName.trim();
  
  const newName = `event-card-${String(index + 1).padStart(2, '0')}${ext}`;
  const newPath = path.join(destDir, newName);
  
  fs.copyFileSync(oldPath, newPath);
  
  newCards.push({
    title: { tr: baseName, en: baseName },
    event: { tr: baseName, en: baseName },
    role: { tr: "Katılımcı / Görevli", en: "Participant / Staff" },
    year: "2024-2026",
    image: `/images/cards/cutouts/${newName}`,
    sourceImage: `/images/cards/cutouts/${newName}`,
    accent: ["blue", "coral", "teal", "cyan", "amber"][index % 5],
    rotation: parseFloat((Math.random() * 10 - 5).toFixed(1)),
    hanger: index % 2 === 0 ? "double" : "single",
    orientation: "portrait"
  });
});

fs.writeFileSync('C:\\Users\\hasan\\Masaüstü\\Bussiness\\Portfolio\\PortfolioApp\\scripts\\cards_output.json', JSON.stringify(newCards, null, 2));
console.log("Processed " + files.length + " files.");
