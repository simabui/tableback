import express from 'express';
import PublicationControl from './publication.controller.js';

const publicationRouter = express.Router();
const publication = new PublicationControl();

publicationRouter.get('/', publication.getPublications);

export default publicationRouter;
