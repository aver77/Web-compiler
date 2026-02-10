const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const generationDirectory = path.join(__dirname, "codes");

if (!fs.existsSync(generationDirectory)) {
    fs.mkdirSync(generationDirectory, { recursive: true });
}

const generateFile = async (format, code) => {
    const jobId = uuid();
    const filename = `${jobId}.${format}`;
    const filepath = path.join(generationDirectory, filename);

    await fs.writeFileSync(filepath, code);
    return filepath;
};

module.exports = {
    generateFile,
    generationDirectory
};
