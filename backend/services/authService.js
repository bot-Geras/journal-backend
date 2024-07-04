import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { query } from '../utils/db';

const registerUser = async (username, password) => {
  const hashedPassword = await hash(password, 10);
  const result = await query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const authenticateUser = async (username, password) => {
  const result = await query('SELECT * FROM users WHERE username = $1', [username]);
  const user = result.rows[0];
  if (!user) throw new Error('Invalid username or password');

  const isValid = await compare(password, user.password);
  if (!isValid) throw new Error('Invalid username or password');

  const token = sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
  return { user, token };
};

export default {
  registerUser,
  authenticateUser,
};