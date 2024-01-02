/*
 * Controllers of the application
 * to decide what to do on calling
 */


// Local
import notes        from '../data.js';
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
const NotesCreateView = (_, res) => {
  console.log('You are using notes create view')
  res.json(notes);
}


/* 
 * Method      - PUT  
 * Endpoints   - /api/notes/:id
 * Description - Update note of given id or 404
 */
const NotesUpdateView = (_, res) => {
  console.log('Update view');
}


/* 
 * Method      - DELETE  
 * Endpoints   - /api/notes/:id
 * Description - Delete note of given id or 404
 */
const NotesDeleteView = (req,res) => {
  const updatedNotes = notes.filter(note => note._id !== req.params.id);
  res.json(updatedNotes);
}


export {
  NotesListView, 
  NotesDetailView,
  NotesCreateView,
  NotesUpdateView,
  NotesDeleteView
};

