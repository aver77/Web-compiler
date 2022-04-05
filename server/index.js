const express = require("express");
const cors = require("cors");

const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(5001, () => {});

app.get('/', (req, res) => {
    return res.json("Server is running on 5001 port");
})

app.post("/code", async (req, res) => {
    const { language = "cpp", code } = req.body;

    if (code === undefined) {
        return res.status(400).json({success: false, error: "Empty code body"});
    }
    //generate a file with code from request
    const filepath = await generateFile(language, code);
    try {
        //run file and send the response
        const output = await executeCpp(filepath);
        return res.json({filepath, output});
    } catch {
        return res.json({output: "Compile code error"});
    }
})