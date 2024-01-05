const fs = require('fs');
const path = require('path');

// Command line arguments: [node, script.js, targetDir]
const targetDir = process.argv[2];

if (!targetDir) {
    console.error('Please specify a target directory.');
    process.exit(1);
}

// Ensure the directory exists
if (!fs.existsSync(targetDir)) {
    console.error(`The directory "${targetDir}" does not exist.`);
    process.exit(1);
}

const isJsFile = (fileName) =>
    fileName.endsWith('.js') && fileName !== 'index.js';

fs.readdir(targetDir, (err, files) => {
    if (err) {
        console.error(`Error reading the directory: ${err.message}`);
        process.exit(1);
    }

    const exports = files
        .filter(isJsFile)
        .map((file) => {
            const moduleName = path.basename(file, '.js');
            return `module.exports.${moduleName} = require('./${moduleName}');`;
        })
        .join('\n');

    const indexPath = path.join(targetDir, 'index.js');
    fs.writeFile(indexPath, exports, (err) => {
        if (err) {
            console.error(`Error writing to index.js: ${err.message}`);
            process.exit(1);
        }
        console.log(`index.js created successfully in ${targetDir}`);
    });
});
