import{
  addJournalEntry, getJournalEntries, updateJournalEntry, getJournalEntriesByCategory, deleteJournalEntry,
} from '../services/journalService.js';

  
const addEntry = async (req, res) => {
  const { title, content, category } = req.body;
  const user = req.user;
  try {
    const entry = await addJournalEntry(user, title, content, category);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  
  const getEntries = async (req, res) => {
    const user = req.user;
    try {
      const entries = await getJournalEntries(user);
      res.status(200).json(entries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  const getEntriesByCategory = async (req, res) => {
    const { category } = req.params;
    const user = req.user;
    try {
      const entries = await getJournalEntriesByCategory(user, category);
      res.status(200).json(entries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateEntry = async (req, res) => {
    const { id } = req.params;
    const { title, content, category } = req.body;
    const user = req.user;
    try {
      const entry = await updateJournalEntry(id, user, title, content, category);
      res.status(200).json(entry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteEntry = async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    try {
      await deleteJournalEntry(id, user);
      res.status(200).json({ message: 'Journal entry deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export  {
    addEntry,
    getEntries,
    updateEntry,
    deleteEntry,
    getEntriesByCategory,
  };