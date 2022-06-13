import { Router } from 'express';
import notesController from '../controllers/notesController.js';
const notesRouter = Router();

notesRouter.get('/:userId', notesController.getUserNotes, function(req, res) {
  res.status(200).json({ notes: res.locals.notes });
});

notesRouter.post('/', notesController.addNote, function(req, res) {
  res.status(200).json({ newNote: res.locals.newNote });
});

export default notesRouter;