// This is a utility script to help save the logo
const fs = require('fs');
const path = require('path');

// Create the directory if it doesn't exist
const targetDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Path to save the file
const logoPath = path.join(targetDir, 'logo.png');

console.log('Please save the logo image as:', logoPath);
console.log('Instructions:');
console.log('1. Right-click on the infinity logo image in the conversation');
console.log('2. Save the image to your computer');
console.log('3. Rename it to "logo.png"');
console.log('4. Move it to the following location:', logoPath); 