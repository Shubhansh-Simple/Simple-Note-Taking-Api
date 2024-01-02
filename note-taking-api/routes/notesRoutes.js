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
router.get('/',     NotesListView);

/* GET - Retrieve a note of given id  */
router.get('/:id', NotesDetailView);

/* POST - Create a note */
router.post('/',     NotesCreateView);

/* PUT - Update a note of given id */
router.put('/:id', NotesUpdateView);

/* DELETE - Delete a note of given id */
router.delete('/:id', NotesDeleteView);


export default router;



