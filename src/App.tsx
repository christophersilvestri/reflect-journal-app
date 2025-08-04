import React, { useState } from 'react';
import { JournalEntry } from './types';
import { useJournalEntries } from './hooks/useJournalEntries';
import { LoadingScreen } from './screens/LoadingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { EditorScreen } from './screens/EditorScreen';

export default function App() {
  const { entries, isLoading, createEntry, updateEntry, deleteEntry } = useJournalEntries();
  const [currentEntry, setCurrentEntry] = useState<JournalEntry | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateNew = () => {
    setCurrentEntry(null);
    setIsEditing(true);
  };

  const handleEditEntry = (entry: JournalEntry) => {
    setCurrentEntry(entry);
    setIsEditing(true);
  };

  const handleSaveEntry = async (entry: JournalEntry) => {
    if (currentEntry) {
      await updateEntry(entry);
    } else {
      await createEntry(entry);
    }
    setCurrentEntry(null);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setCurrentEntry(null);
    setIsEditing(false);
  };

  const handleDeleteEntry = async (entryId: string) => {
    await deleteEntry(entryId);
    if (currentEntry?.id === entryId) {
      setCurrentEntry(null);
      setIsEditing(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isEditing) {
    return (
      <EditorScreen
        entry={currentEntry}
        onSave={handleSaveEntry}
        onCancel={handleCancelEdit}
      />
    );
  }

  return (
    <HomeScreen
      entries={entries}
      onCreateNew={handleCreateNew}
      onEditEntry={handleEditEntry}
      onDeleteEntry={handleDeleteEntry}
    />
  );
} 