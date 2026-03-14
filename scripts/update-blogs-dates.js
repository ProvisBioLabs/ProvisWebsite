const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/VINAY/Desktop/ProvisBio/provis-new/app/blogs/blogsData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updates = {
    "animal-origin-free-recombinant-reagents": "July 2025",
    "enhancing-aav-manufacturing": "July 2025",
    "enzymatic-strategies-behind-semaglutide-manufacturing": "February 2026",
    "enzyme-applications-in-biopharmaceutical-downstream-processing": "December 2025",
    "from-bench-to-clinic": "July 2025",
    "pngase-f-and-its-role-in-n": "June 2025",
    "process-related-impurities-in-biologics": "July 2025",
    "recombinant-human-albumin-in-cell-culture-safety-consistency-and-performance": "May 2025",
    "recombinant-trypsin-edta": "July 2025",
    "streptavidin": "October 2025",
    "the-rise-of-pichia-pastoris-in-recombinant-protein-manufacturing": "July 2025"
};

data.forEach(blog => {
    if (updates[blog.id]) {
        blog.date = updates[blog.id];
    }
});

data.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("Updated blogsData.json successfully.");
