import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import PublicationRouter from './publication/publication.router.js';

dotenv.config();

const PORT = process.env.PORT;

class PublicationServer {
  constructor() {
    this.server = null;
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan('tiny'));
    this.server.use(cors());
  }

  initRoutes() {
    this.server.use('/publication', PublicationRouter);
  }

  async initDatabase() {
    try {
      await mongoose.connect(
        process.env.MONGODB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        err => {
          if (err) {
            console.log(err);
            return process.exit(1);
          }
          console.log('Database connection successful');
        },
      );
    } catch (err) {
      console.log(err);
    }
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log('Server started listening on port', PORT);
    });
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }
}

new PublicationServer().start();
