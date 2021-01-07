import express from 'express';
import PublicationControl from './publication.controller.js';

const publicationRouter = express.Router();
const publication = new PublicationControl();

publicationRouter.get('/', publication.getPublications);
// publicationRouter.get("/:contactid", PublicationControl.getContact);
// publicationRouter.post("/", PublicationControl.validateAddUser, PublicationControl.addContact);
// publicationRouter.delete("/:contactid", PublicationControl.removeContact);
// publicationRouter.patch("/:contactid", PublicationControl.validateUpdateUser, PublicationControl.updateContact);

export default publicationRouter;
