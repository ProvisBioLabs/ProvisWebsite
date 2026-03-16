const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetImages = [
    { old: 'public/dr-bala-reddyv2.JPG', new: 'public/dr-bala-reddy-founder-provis-biolabs.webp', width: 1200 },
    { old: 'public/people.png', new: 'public/provis-biolabs-team-collaboration.webp', width: 1920 },
    { old: 'public/cdmo-facility.png', new: 'public/provis-biolabs-cdmo-manufacturing-facility.webp', width: 1920 },
    { old: 'public/science and tech/sustainable.jpg', new: 'public/science and tech/sustainable-biomanufacturing-provis-biolabs.webp', width: 1200 },
    { old: 'public/imagev2.png', new: 'public/provis-biolabs-research-lab.webp', width: 1200 },
];

async function compressImages() {
    console.log("Starting image compression...");
    for (const img of targetImages) {
        try {
            if (fs.existsSync(img.old)) {
                await sharp(img.old)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(img.new);
                console.log(`✅ Compressed: ${img.old} -> ${img.new}`);
                // Delete original after successful compression
                fs.unlinkSync(img.old);
            } else {
                console.warn(`⚠️ Not found: ${img.old}`);
            }
        } catch (error) {
            console.error(`❌ Error compressing ${img.old}:`, error);
        }
    }
    
    // Rename video
    const oldVideo = 'public/8940760-uhd_3840_2160_25fps.mp4';
    const newVideo = 'public/provis-biolabs-hero-background.mp4';
    if (fs.existsSync(oldVideo)) {
        fs.renameSync(oldVideo, newVideo);
        console.log(`✅ Renamed video: ${oldVideo} -> ${newVideo}`);
    }
    
    console.log("Optimization complete.");
}

compressImages();
