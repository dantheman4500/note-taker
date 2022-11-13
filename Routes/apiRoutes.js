const router = require("express").Router();
const store = require('../db/store');


//* routes with the conecting notes with the index.html 
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes)=>{
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

//* ADD a new note to note sections 
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//* DELETE the note from the note section of
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});



module.exports = router;
