import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'André',
    email: 'andre@mail.com',
    password_hash: '12334lkj',
  });
  res.json(user);
});

export default routes;
