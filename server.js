import express from 'express';
import logger from './src/middlewares/logger.js';
import graveDeco from './src/routes/graveDeco.js';
import graveInfo from './src/routes/graveInfo.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the VILA.');
});

app.use('/api/v1/graves/deco', graveDeco);
app.use('/api/v1/graves/info', graveInfo);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

export default app;
