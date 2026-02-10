const fsExtra = require('fs-extra');

const clearDirectory = (dirPath) => {
    fsExtra.emptyDirSync(dirPath);
}

const clearDirectories = (dirPaths) => {
    dirPaths.forEach(dirPath => clearDirectory(dirPath));
}

module.exports = {
    clearDirectory,
    clearDirectories
}