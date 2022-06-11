import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import vocabRouter from './routes/vocab.route.js';
import youdaoRouter from './routes/youdao.route.js';
import hippoRouter from './routes/hippo.route.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // based on body parser
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello World',
    timestamp: new Date(),
  });
});

app.use('/api/vocab', vocabRouter);
app.use('/api/youdao', youdaoRouter);
app.use('/api/hippo', hippoRouter);

// If using serverful than init server
if (process.env.SERVERFUL) {
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Success! Your application is running on  http://localhost:${PORT}/`);
  });
}

export default app;
