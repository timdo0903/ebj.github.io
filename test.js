const fs = require('fs');

const requiredFiles = ['index.html', 'ja/index.html'];
let missing = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    missing.push(file);
  }
}

if (missing.length) {
  console.error(`Missing required file(s): ${missing.join(', ')}`);
  process.exit(1);
}

console.log('All required HTML files are present.');
