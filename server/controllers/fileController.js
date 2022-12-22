import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `fileController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in fileController.${method}. Check server logs for more details.` }
    };
  };

const fileController = {};

fileController.saveNote = (req, res, next) => {
    // console.log('reslocalnewNote:', res.locals.newNote)
  // check if the correct information is on res.locals
//   if (!res.locals.updates && !res.locals.newCharacter) {
//     return next(createErr({
//       method: 'saveNote',
//       type: '',
//       err: 'incorrect info on res.locals',
//     }));
//   }
// read from characters file
fs.readFile(path.resolve(__dirname, '../data/notes.json'), 'UTF-8')
.then(data => {
  let finalNote;
  const parsedData = JSON.parse(data);
//   if (res.locals.updates) {
//     // if we are updating, grab info from res.locals
//     const { id, nickname, fav_food } = res.locals.updates;
//     // get the character from our array based off its id
//     const character = parsedData.results[id];
//     /** NOTE: these checks are in place of defining a delete route for deleting customizations.
//      * This was done to achieve simplicity in the steps of this unit 
//      * and this pattern should NOT be replicated in production code. */
//     if (nickname !== 'keep') character.nickname = nickname;
//     if (nickname === 'delete') delete character.nickname;
//     if (fav_food !== 'keep') character.fav_food = fav_food;
//     if (fav_food === 'delete') delete character.fav_food;

//     finalCharacter = character;
//   } 
    if (res.locals.newNote) {
    // if we are saving a new character, give it an id and custom prop
    // & use what was stored on res.locals from previous middleware
    finalNote = {
      dbId: parsedData.results.length,
      custom: true,
      ...res.locals.newNote
    } // push the new character into the character array
    parsedData.results.push(finalNote);
  } // write updated characters to file as json
  fs.writeFile(path.resolve(__dirname, '../data/notes.json'), 
  JSON.stringify(parsedData), 'UTF-8')
    .then(() => {
      // save the newly created/updated character on res.locals
    //   if (res.locals.updates) res.locals.updatedCharacter = finalCharacter;
      res.locals.newNote = finalNote;
      return next();
    }).catch(err => next(createErr({
        method: 'saveNote', 
        type: 'when writing file', 
        err: err
    })));
}).catch(err => next(createErr({
  method: 'saveNote', 
  type: 'when reading file', 
  err: err,
})));
}

fileController.deleteNote = (req, res, next) => {
    // check if the correct information is on res.locals
  if (!res.locals.deletedId) return next(createErr({
    method: 'deleteNote',
    type: '',
    err: 'incorrect info on res.locals',
  }))
  const { deletedId } = res.locals;
    fs.readFile(path.resolve(__dirname, '../data/notes.json'), 'UTF-8')
    .then(data => {
      const parsedData = JSON.parse(data);
        
      const deleted = parsedData.results[deletedId];
      console.log('deletedobj:', deleted)
      // if character is not custom, throw error, invoking catch handler
      if (deleted.custom !== true) {
        throw 'Character must be custom'
      }
      // delete character object from array
      parsedData.results.splice(deletedId, 1);
      // re-id remaining custom cards
      for (let i = deletedId; i < parsedData.results.length; i++) {
        parsedData.results[i].dbId = i;
      } // i = 1; 1 < 3
      // 
      // write the updated info to file
      console.log('parsedData:', parsedData)
      fs.writeFile(path.resolve(__dirname, '../data/notes.json'), 
      JSON.stringify(parsedData), 'UTF-8')
        .then(() => {
          // save deleted character in res.locals
          console.log('newparsedData:', parsedData)
          res.locals.deletedNote = deleted;
          
          return next();
        }).catch(err => next(createErr({
          method: 'deleteNote', 
          type: 'when writing file',
          err: err,
        })));
    }).catch(err => next(createErr({
      method: 'deleteNote', 
      type: 'when reading file',
      err: err,
    })));


      
}
export default fileController;