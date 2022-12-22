import { ClientError, getBodyProps } from '../utils/utils.js';
// import { v4 as uuidv4 } from 'uuid';
// import {query, sql} from '../models/model.js';


/** @typedef {import("express").RequestHandler} RequestHandler */
import fs from 'fs/promises';
import path, { dirname } from 'path';

const notesController = {};


// /**
//  * Get all notes for a user and store them into `res.locals.notes`
//  * @type {RequestHandler}
//  */
// // fetch('/api/notes/1?videoLink=https%12%30%30youtube%11com')
// notesController.getUserNotes = (req, res, next) => {
//   // Ensure userId param is valid
//   if (!req.params.userId) return next({
//     msg: 'Invalid URL parameter',
//     err: new ClientError('Provided userId parameter in URL is invalid')
//   });

//   let text = `SELECT * FROM Notes WHERE Notes.user_id = 1`
//   const params = [];
//   if (req.query.videoLink) {
//     text += `\nAND notes.youtube_link = $1`
//     params.push(req.query.videoLink);
//   }
//   const result = query(text, params).then(data => {
//     res.locals.notes = data.rows;
//     return next();
//   })
// ; // Move into query .then() or after awaiting query
// };

// /**
//  * Inserts a new note into the database and stores the inserted note (with the note id from insertion)
//  * into `res.locals.newNote`
//  * @type {RequestHandler}
//  */
notesController.addNote = (req, res, next) => {
  const required = {
    title: 'string',
    content: 'string',
    // username: 'string',
    youtubeLink: 'string',
    time: 'string'
  };
  res.locals.newNote = {};
  console.log('reqbody:', req.body)
  for (const key in required){
    res.locals.newNote[key] = req.body[key]
  }
  console.log('reslocalsnewNote:', res.locals.newNote)
  return next();

//   // Check for required body properties and 
//   // console.log(req.body)
//   const required = {
//     title: 'string',
//     content: 'string',
//     // username: 'string',
//     youtubeLink: 'string',
//     time: 'number'
//   };
//   let properties = {};
//   try {
//     properties = getBodyProps(req, required);
//   } catch (err) {
//     return next({
//       msg: 'Invalid properties provided in request body',
//       err: err,
//       code: 400
//     });
//   }

//   const text = `
//     INSERT INTO Notes (user_id, _id, title, youtube_link, content, time)
//     VALUES ($1, $2, $3, $4, $5, $6)
//     RETURNING *
//     `;

//   query(text, [1, uuidv4(), req.body.title, req.body.youtubeLink, req.body.content, req.body.time]).then(data => {
//     res.locals.newNote = data.rows[0];
//     return next();
//   });

//   // return next(); // Move into query .then() or after awaiting query
};

notesController.deleteNote = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next({
       log: 'characterController.deleteCharacter ERROR: properties on request params or body undefined',
       message: {
           err: 'characterController.deleteCharacter: ERROR: Incorrect data received'
       },
   });
  }

  res.locals.deletedId = id;
  return next();
}

export default notesController;