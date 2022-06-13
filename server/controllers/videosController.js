import { ClientError, getBodyProps } from '../utils/utils.js';
import {query, sql} from '../models/model.js';


/** @typedef {import("express").RequestHandler} RequestHandler */

const videosController = {};

videosController.getUserVideos = (req, res, next) => {
  if (!req.params.userId) return next({
    msg: 'Invalid URL parameter',
    err: new ClientError('Provided userId parameter in URL is invalid')
  });

  const text = `SELECT youtube_link FROM Notes WHERE user_id = 1 GROUP BY youtube_link`
  query(text).then(result => {
    res.locals.videos = result.rows.map(video => video.youtube_link);
    return next();
  });
};

export default videosController;