import { query } from '../utils/db';

const addJournalEntry = async (user, title, content, category, date) => {
  const result = await query(
    'INSERT INTO journal_entries (user_id, title, content, category, date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [user.id, title, content, category, date]
  );
  return result.rows[0];
};

const getJournalEntries = async (user) => {
  const result = await query('SELECT * FROM journal_entries WHERE user_id = $1', [user.id]);
  return result.rows;
};

const updateJournalEntry = async (id, user, title, content, category, date) => {
  const result = await query(
    'UPDATE journal_entries SET title = $1, content = $2, category = $3, date = $4 WHERE id = $5 AND user_id = $6 RETURNING *',
    [title, content, category, date, id, user.id]
  );
  return result.rows[0];
};

const deleteJournalEntry = async (id, user) => {
  await query('DELETE FROM journal_entries WHERE id = $1 AND user_id = $2', [id, user.id]);
};

export default {
  addJournalEntry,
  getJournalEntries,
  updateJournalEntry,
  deleteJournalEntry,
};