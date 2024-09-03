import express, { json } from 'express';
import next from 'next';
import usersRoutes from '../src/app/api/users';
import postsRoutes from '../src/app/api/posts';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  server.use(json());

  // Rotas da API
  server.use('/api/users', usersRoutes);
  server.use('/api/posts', postsRoutes);

  // Rotas do Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server running on http://localhost:3000');
  });
});
