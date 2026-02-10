const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const cppOutputDirectory = path.join(__dirname, "outputs");

if (!fs.existsSync(cppOutputDirectory)) {
    fs.mkdirSync(cppOutputDirectory, { recursive: true });
}

const executeCpp = filepath => {
    const jobId = path.basename(filepath).split(".")[0];
    const outPath = path.join(cppOutputDirectory, `${jobId}.out`);

    return new Promise((resolve, reject) => {
        exec(
            `g++ ${filepath} -o ${outPath} && cd ${cppOutputDirectory} && ${jobId}.out`,
            (error, stdout, stderr) => {
                error && reject({ error, stderr });
                stderr && reject(stderr);
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    executeCpp,
    cppOutputDirectory
};
