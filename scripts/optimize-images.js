// Image optimization script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get the directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const iconsDir = path.join(publicDir, 'icons');

// Make sure the optimized directories exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to process images
async function processImage(inputPath, outputPath, options = {}) {
  try {
    // Default options
    const defaultOptions = {
      quality: 80,
      width: null,
      height: null,
      format: null
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    let imageProcess = sharp(inputPath);
    
    // Resize if width or height is provided
    if (finalOptions.width || finalOptions.height) {
      imageProcess = imageProcess.resize(finalOptions.width, finalOptions.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to specified format if provided
    if (finalOptions.format) {
      switch (finalOptions.format) {
        case 'webp':
          imageProcess = imageProcess.webp({ quality: finalOptions.quality });
          break;
        case 'jpeg':
        case 'jpg':
          imageProcess = imageProcess.jpeg({ quality: finalOptions.quality });
          break;
        case 'png':
          imageProcess = imageProcess.png({ quality: finalOptions.quality });
          break;
        case 'avif':
          imageProcess = imageProcess.avif({ quality: finalOptions.quality });
          break;
      }
    }
    
    // Save the processed image
    await imageProcess.toFile(outputPath);
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

// Function to recursively process all images in a directory
async function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // If it's a directory, process it recursively
        await processDirectory(filePath);
      } else {
        // Check if it's an image file
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
          // Create output paths for different formats
          const basename = path.basename(file, ext);
          const relativePath = path.relative(publicDir, directory);
          const outputDir = path.join(publicDir, relativePath);
          
          // Make sure the output directory exists
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          
          // Original optimization (keep same format but optimize)
          await processImage(filePath, filePath, { quality: 80 });
          
          // Create WebP version
          if (ext !== '.webp') {
            const webpOutput = path.join(outputDir, `${basename}.webp`);
            await processImage(filePath, webpOutput, {
              quality: 80,
              format: 'webp'
            });
          }
          
          // Create AVIF version if supported by your Sharp version
          try {
            const avifOutput = path.join(outputDir, `${basename}.avif`);
            await processImage(filePath, avifOutput, {
              quality: 65,
              format: 'avif'
            });
          } catch (e) {
            console.log('AVIF not supported, skipping');
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Run the optimization
(async () => {
  console.log('🔍 Starting image optimization...');
  
  // Process public/images
  if (fs.existsSync(imagesDir)) {
    await processDirectory(imagesDir);
  }
  
  // Process public/icons
  if (fs.existsSync(iconsDir)) {
    await processDirectory(iconsDir);
  }
  
  console.log('✅ Image optimization completed!');
})(); 