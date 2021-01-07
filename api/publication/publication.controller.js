import { readFile } from 'fs/promises';
import publicationModel from './publication.model.js';

class PublicationController {
  // GET
  getPublications = async (req, res) => {
    try {
      // const contacts = await publicationModel.find();

      res.status(200).send('contacts');
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  };
}

export default PublicationController;
