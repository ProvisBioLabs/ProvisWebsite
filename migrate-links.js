const fs = require('fs');

function migrateToLink(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add import Link if not present
    if (!content.includes("import Link from 'next/link';")) {
        // Insert after first import or at top
        if (content.match(/import /)) {
            content = content.replace(/import /, "import Link from 'next/link';\nimport ");
        } else {
            content = "import Link from 'next/link';\n" + content;
        }
    }

    // Regex to match <a ...> and </a>.
    // We only want to transform <a > into <Link > if it has an href that is internal or dynamic (e.g. href={link.href} or href="/...")
    // In Navbar, we have:
    // <a href="/" ...>
    // <a href={item.href} ...>
    // <a href={child.href} ...>
    // <a href={col.headingHref} ...>
    // <a href="/cdmo" ...>
    // In Footer:
    // <a href={link.href} ...>
    // We do NOT want to change <a href="https://www.linkedin.com..." ...>
    
    // Replace <a href={...} > or <a href="/..." > with <Link
    content = content.replace(/<a(\s+[^>]*href=(?:\{[^}]+\}|"\/[^"]*")[^>]*)>/g, '<Link$1>');
    
    // Now replace </a> with </Link> but only if we know it's a paired tag.
    // Actually, it's safer to just replace all </a> with </Link> AND restore </a> for external links.
    // Let's replace </Link> where the preceding tag was <a ...> by looking backwards... 
    // Wait, simpler: just match <a ...>...</a> where the opening tag has an internal href.

    // A more robust regex replacement function for a string
    const parts = content.split(/(<a\s[^>]*>|<\/a>)/);
    let openLink = false;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part.startsWith('<a ')) {
            // check external
            if (!part.includes('href="http')) { 
                 parts[i] = part.replace('<a ', '<Link ');
                 openLink = true;
            } else {
                 openLink = false;
            }
        } else if (part === '</a>') {
            if (openLink) {
                 parts[i] = '</Link>';
                 openLink = false; // reset but might be nested (not possible in HTML validly)
            }
        }
    }
    
    // Re-run for nested / multiple independent standard elements
    let openStack = [];
    content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes("import Link from 'next/link';")) {
        content = content.replace(/import /, "import Link from 'next/link';\nimport ");
    }
    
    const tokens = content.split(/(<a\s[^>]*>|<\/a>)/);
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].startsWith('<a ')) {
            if (!tokens[i].includes('href="http') && !tokens[i].includes('href={`mailto') && !tokens[i].includes('href={`tel')) {
                tokens[i] = tokens[i].replace('<a ', '<Link ');
                openStack.push(true);
            } else {
                openStack.push(false);
            }
        } else if (tokens[i] === '</a>') {
            const isInternal = openStack.pop();
            if (isInternal) {
                tokens[i] = '</Link>';
            }
        }
    }

    fs.writeFileSync(filePath, tokens.join(''), 'utf8');
    console.log(`Migrated ${filePath}`);
}

migrateToLink('c:\\Users\\VINAY\\Desktop\\ProvisBio\\provis-new\\app\\components\\Navbar.tsx');
migrateToLink('c:\\Users\\VINAY\\Desktop\\ProvisBio\\provis-new\\app\\components\\Footer.tsx');
