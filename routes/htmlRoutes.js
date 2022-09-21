// npm installation
const path = require("path");

// tells which html file in the public folder to return
module.exports = (app) => {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname), "../public/index.html")
    });
}