import { Router } from 'express';
import videosController from '../controllers/videosController.js';
const videosRouter = Router();

videosRouter.get('/:userId', videosController.getUserVideos, function(req, res) {
  res.status(200).json({ videos: res.locals.videos });
});

videosRouter.post('/', 
  videosController.addVideo, 
  // fileController.saveVideo,
  (req, res) =>
  res.status(200).json(res.locals.newVideo)
);

export default videosRouter;

/*    const saveInfo = {
  link: youtubeLink,
  videoTitle: title,
  listOfNotes: noteSummary
};
*/
