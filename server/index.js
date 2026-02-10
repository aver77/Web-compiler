const express = require("express");
const cors = require("cors");

const { generateFile, generationDirectory } = require("./generations");
const { executeCpp, cppOutputDirectory } = require("./executions/executeCpp");
const { executePy } = require("./executions/executePy");
const { executeJs } = require("./executions/executeJs");
const { clearDirectories } = require("./shared/utils");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5001, () => {});

app.get("/", (req, res) => {
    return res.json("Server is running on 5001 port");
});

app.post("/code", async (req, res) => {
    const { language = "cpp", code } = req.body;

    if (code === undefined) {
        return res
            .status(400)
            .json({ success: false, error: "Empty code body" });
    }
    //генерация файла с кодом запроса
    const filepath = await generateFile(language, code);
    try {
        let output;
        if (language === "cpp") {
            output = await executeCpp(filepath);
        }

        if (language === "py") {
            output = await executePy(filepath);
        }

        if (language === "js") {
            output = await executeJs(filepath);
        }

        return res.json({ filepath, output });
    } catch {
        return res.json({ output: "Compile code error" });
    } finally {
        clearDirectories([ generationDirectory, cppOutputDirectory ]);
    }
});
