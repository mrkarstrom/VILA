import express from 'express';
import logger from './src/middlewares/logger.js';
import graveDeco from './src/routes/graveDeco.js';
import graveInfo from './src/routes/graveInfo.js';
import tasks from './src/routes/tasks.js';
import admin from './src/routes/admin.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Välkommen till VILA.');
});

// API Routes
app.use('/api/v1/graves/deco', graveDeco);
app.use('/api/v1/graves/info', graveInfo);
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/admin', admin);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

export default app;
