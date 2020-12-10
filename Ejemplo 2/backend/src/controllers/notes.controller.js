const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes =  await Note.find()
    res.json(notes)
}

notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author} = req.body
    const newNote = new Note({ title, content, date, author })
    await newNote.save()
    res.json({message: "Note Saved"})
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    const {title, content, date, author} = req.body
    console.log(title)
    await Note.findOneAndUpdate(req.params.id, { title, content, date, author })
    res.json({message: 'note updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id)
    res.json({message: 'note deleted'})
}

module.exports = notesCtrl