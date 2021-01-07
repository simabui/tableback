import { readFile } from 'fs/promises';
import publicationModel from './publication.model.js';

class PublicationController {
  listPublications = async res => {
    try {
      const data = await readFile(new URL('../../db/test_data.json', import.meta.url));
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  };

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
