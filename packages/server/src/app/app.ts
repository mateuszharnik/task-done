import express from 'express';
import type { Response, Request } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../../../../.env') });

const app = express();

app.use(morgan('dev'));

app.use(cors({ origin: '*' }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../../client/dist')));

  app.get('(/*)?', (req: Request, res: Response) => res.sendFile(join(__dirname, '../../../client/dist/index.html'), { root: '.' }));
}

app.get('/api/test/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'OK' });
});

export default app;
