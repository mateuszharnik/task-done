import logger from 'loglevel';
import app from '@app';

logger.setLevel('info');

app.listen(process.env.SERVER_PORT, () => {
  logger.info(`Server is running at ${process.env.SERVER_URL}`);
});
