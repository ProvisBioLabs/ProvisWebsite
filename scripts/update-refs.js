const fs = require('fs');
const path = require('path');

const replacements = {
    'dr-bala-reddyv2.JPG': 'dr-bala-reddy-founder-provis-biolabs.webp',
    'people.png': 'provis-biolabs-team-collaboration.webp',
    'cdmo-facility.png': 'provis-biolabs-cdmo-manufacturing-facility.webp',
    'sustainable.jpg': 'sustainable-biomanufacturing-provis-biolabs.webp',
    'imagev2.png': 'provis-biolabs-research-lab.webp',
    '8940760-uhd_3840_2160_25fps.mp4': 'provis-biolabs-hero-background.mp4'
};

const filesToUpdate = [
    'app/science/SciencePageContent.tsx',
    'app/components/Hero.tsx',
    'app/components/CDMO.tsx',
    'app/components/AboutStrip.tsx',
    'app/components/About.tsx',
    'app/cdmo/CDMOContent.tsx',
    'app/careers/CareersContent.tsx'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        for (const [oldName, newName] of Object.entries(replacements)) {
            if (content.includes(oldName)) {
                content = content.replace(new RegExp(oldName, 'g'), newName);
                updated = true;
                console.log(`Replaced ${oldName} -> ${newName} in ${file}`);
            }
        }
        
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
    }
});
console.log('Finished updating component references.');
