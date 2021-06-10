import express from 'express';
import controllerRouting from './routes/index';

const exPort = process.env.PORT || 5000;
const app = express();

app.use(express.json());

controllerRouting(app);

app.listen(exPort, () => {
  console.log(`Server running on port ${exPort}`);
});
