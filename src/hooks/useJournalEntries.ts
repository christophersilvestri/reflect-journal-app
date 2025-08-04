import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JournalEntry } from '../types';
import { STORAGE_KEYS } from '../constants/storage';

export const useJournalEntries = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load entries from storage on mount
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem(STORAGE_KEYS.JOURNAL_ENTRIES);
      if (storedEntries) {
        const parsedEntries = JSON.parse(storedEntries).map((entry: any) => ({
          ...entry,
          createdAt: new Date(entry.createdAt),
          updatedAt: new Date(entry.updatedAt)
        }));
        setEntries(parsedEntries);
      }
    } catch (error) {
      console.error('Error loading entries:', error);
      if (typeof window !== 'undefined') {
        window.alert('Error loading your entries. Starting with a fresh journal.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveEntriesToStorage = async (newEntries: JournalEntry[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.JOURNAL_ENTRIES, JSON.stringify(newEntries));
    } catch (error) {
      console.error('Error saving entries:', error);
      if (typeof window !== 'undefined') {
        window.alert('Error saving your entries. Please try again.');
      }
    }
  };

  const createEntry = async (entry: JournalEntry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    await saveEntriesToStorage(newEntries);
  };

  const updateEntry = async (updatedEntry: JournalEntry) => {
    const newEntries = entries.map(entry => 
      entry.id === updatedEntry.id ? updatedEntry : entry
    );
    setEntries(newEntries);
    await saveEntriesToStorage(newEntries);
  };

  const deleteEntry = async (entryId: string) => {
    const newEntries = entries.filter(entry => entry.id !== entryId);
    setEntries(newEntries);
    await saveEntriesToStorage(newEntries);
  };

  return {
    entries,
    isLoading,
    createEntry,
    updateEntry,
    deleteEntry,
    loadEntries
  };
}; 