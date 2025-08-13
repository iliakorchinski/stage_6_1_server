import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
