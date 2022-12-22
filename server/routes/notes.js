import { Router } from 'express';
import notesController from '../controllers/notesController.js';
import fileController from '../controllers/fileController.js';
const notesRouter = Router();

// notesRouter.get('/:userId', notesController.getUserNotes, function(req, res) {
//   res.status(200).json({ notes: res.locals.notes });
// });

notesRouter.post('/', 
  notesController.addNote, 
  fileController.saveNote,
  (req, res) =>
  res.status(200).json(res.locals.newNote)
);

notesRouter.delete('/:id',
  notesController.deleteNote,
  fileController.deleteNote, 
  (req, res) => {
    return res.status(200).json(res.locals.deletedNote)
  }
)
export default notesRouter;