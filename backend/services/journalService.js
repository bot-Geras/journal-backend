import { query } from '../utils/db.js';

const addJournalEntry = async (user, title, content, category) => {
  const result = await query(
    'INSERT INTO journal_entries (user_id, title, content, category) VALUES ($1, $2, $3, $4) RETURNING *',
    [user.id, title, content, category]
  );
  return result.rows[0];
};

const getJournalEntries = async (user) => {
  const result = await query('SELECT * FROM journal_entries WHERE user_id = $1', [user.id]);
  return result.rows;
};

const getJournalEntriesByCategory = async (user, category) => {
  const result = await query(
    'SELECT * FROM journal_entries WHERE user_id = $1 AND category = $2',
    [user.id, category]
  );
  return result.rows;
};

const updateJournalEntry = async (id, user, title, content, category) => {
  const result = await query(
    'UPDATE journal_entries SET title = $1, content = $2, category = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
    [title, content, category, id, user.id]
  );
  return result.rows[0];
};

const deleteJournalEntry = async (id, user) => {
  await query('DELETE FROM journal_entries WHERE id = $1 AND user_id = $2', [id, user.id]);
};

export  {
  addJournalEntry,
  getJournalEntries,
  updateJournalEntry,
  deleteJournalEntry,
  getJournalEntriesByCategory
};