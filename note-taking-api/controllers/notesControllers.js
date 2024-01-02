/*
 * Controllers of the application
 * to decide what to do on calling
 */


// Local
import asyncHandler from '../middlewares/asyncHandler.js';
import Notes        from '../models/notesModels.js';


/* 
 * Method      - GET  
 * Endpoints   - /api/notes/
 * Description - Returns notes list ( no pagination )
 */
const NotesListView = asyncHandler(async (req, res) => {
  const notes = await Notes.find({});
  res.json(notes);
});


/* 
 * Method      - GET  
 * Endpoints   - /api/notes/:id
 * Description - Returns note of given id
 */
const NotesDetailView = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if ( note )
    return res.json(note);
  else{
    /* Raise 404 error */
  }
});


/* 
 * Method      - POST  
 * Endpoints   - /api/notes/
 * Description - Create a new note or 404
 */
const NotesCreateView = asyncHandler(async (req, res) => {

  console.log('CreateView Controller');

  const { 
    title,
    description
  } = req.body;

  const note = await Notes.create({
    title: title,
    description: description
  });

  res.json(note);

});


/* 
 * Method      - PUT  
 * Endpoints   - /api/notes/:id
 * Description - Update note of given id or 404
 */
const NotesUpdateView = asyncHandler(async (req, res) => {
  const {
    title,
    description,
  } = req.body

  const note = await Notes.findById(req.params.id);

  if (note) {
    note.title       = title
    note.description = description

    const updatedNote = await note.save();
    res.json(updatedNote);
  }
  else {
    /* Raise Error */
  }

});


/* 
 * Method      - DELETE  
 * Endpoints   - /api/notes/:id
 * Description - Delete note of given id or 404
 */
const NotesDeleteView = asyncHandler(async (req, res) => {
  const note  = await Notes.findById(req.params.id);

  if (note) {
    await note.deleteOne();
    res.json({message: `Note ${note.title} Removed!`});
  }
  else {
    res.status(404);
    throw new Error('Note not found');
  }

});

export {
  NotesListView, 
  NotesDetailView,
  NotesCreateView,
  NotesUpdateView,
  NotesDeleteView
};

