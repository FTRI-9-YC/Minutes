import { Router } from 'express';
import videosController from '../controllers/videosController.js';
const videosRouter = Router();

videosRouter.get('/:userId', videosController.getUserVideos, function(req, res) {
  res.status(200).json({ videos: res.locals.videos });
});


export default videosRouter;