const fs = require("fs");
const uuid = require("uuid").v4;

module.exports = (app) => {
    let notesData = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

    app.get("/api/notes", (req, res) => {
        return res.json(notesData);
    });

    app.post("/api/notes", (req, res) => {
        const addNote = {
            ...req.body, 
            id: uuid()
        };
        notesData.push(addNote);

        fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
            if (err) {
                throw err;
            }
        });

        res.json(notesData);
    });

    app.delete("/api/notes/:id", (req, res) => {
        const notesId = req.params.id;

        for (let i=0; i < notesData.length; i++) {
            if (notesData[i].id === notesId) {
                notesData.splice(i, 1);
            }
        }

        fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
            if (err) throw err;
        });

        res.json(notesData);
    })
}