// import { ClientError, getBodyProps } from '../utils/utils.js';
// import {query, sql} from '../models/model.js';


// /** @typedef {import("express").RequestHandler} RequestHandler */

const videosController = {};

videosController.getUserVideos = (req, res, next) => {
//   if (!req.params.userId) return next({
//     msg: 'Invalid URL parameter',
//     err: new ClientError('Provided userId parameter in URL is invalid')
//   });

//   const text = `SELECT youtube_link FROM Notes WHERE user_id = 1 GROUP BY youtube_link`
//   query(text).then(result => {
//     res.locals.videos = result.rows.map(video => video.youtube_link);
//     return next();
//   });
};
// const saveInfo = {
//     link: youtubeLink,
//     videoTitle: title,
//     listOfNotes: noteSummary
//   };
videosController.addVideo = (req, res, next) => {
    const required = {
    //   link: 'string',
    //   videoTitle: 'string',
      // username: 'string',
      listOfNotes: 'array'
    };
    res.locals.newVideo = {};
    console.log('reqbody:', req.body)
    for (const key in required){
      res.locals.newVideo[key] = req.body[key]
    }
    console.log('reslocalsnewVideo:', res.locals.newVideo)
    return next();
}
// videosController.addVideo, 
export default videosController;