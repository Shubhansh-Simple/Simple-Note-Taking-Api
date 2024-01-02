/*
 * Routes of the applicatoin
 * for connecting endpoints with a controller
 */

import express from 'express';

// Local
import {
  NotesListView,
  NotesDetailView,
  NotesCreateView,
  NotesUpdateView,
  NotesDeleteView  }from '../controllers/notesControllers.js';

const router = express.Router();

/* GET - List of all notes ( no pagination ) */
router.get('/notes',     NotesListView);

/* GET - Retrieve a note of given id  */
router.get('/notes/:id', NotesDetailView);

/* POST - Create a note */
router.post('/notes',     NotesCreateView);

/* PUT - Update a note of given id */
router.put('/notes/:id', NotesUpdateView);

/* DELETE - Delete a note of given id */
router.delete('/notes/:id', NotesDeleteView);


export default router;



