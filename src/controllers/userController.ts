import { Request, Response } from 'express';
import { users } from '../data/users';

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.json(user);
};

export const newUser = (req: Request, res: Response) => {
  const data = req.body;
  users.push({ ...data, id: Math.random().toString() });
  res.sendStatus(201);
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updates,
  };

  res.json(users[userIndex]);
};
