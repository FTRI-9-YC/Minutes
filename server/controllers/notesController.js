import { ClientError, getBodyProps } from '../utils/utils.js';

/** @typedef {import("express").RequestHandler} RequestHandler */

const notesController = {};

/**
 * Get all notes for a user and store them into `res.locals.notes`
 * @type {RequestHandler}
 */
notesController.getUserNotes = (req, res, next) => {
  // Ensure username param is valid
  if (!req.params.username) return next({
    msg: 'Invalid URL parameter',
    err: new ClientError('Provided username parameter in URL is invalid')
  });

  // TODO: Query database and stores notes into locals

  return next(); // Move into query .then() or after awaiting query
};

/**
 * Inserts a new note into the database and stores the inserted note (with the note id from insertion)
 * into `res.locals.newNote`
 * @type {RequestHandler}
 */
notesController.addNote = (req, res, next) => {
  // Check for required body properties and 
  const required = {
    title: 'string',
    contents: 'string',
    username: 'string',
    videoLink: 'string',
    videoTime: 'number'
  };
  let properties = {};
  try {
    properties = getBodyProps(req, required);
  } catch (err) {
    return next({
      msg: 'Invalid properties provided in request body',
      err: err,
      code: 400
    });
  }

  // TODO: Insert note into database and store returned row into locals

  return next(); // Move into query .then() or after awaiting query
};

export default notesController;