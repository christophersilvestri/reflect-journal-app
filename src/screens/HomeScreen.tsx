import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { JournalEntry } from '../types';
import { EntryCard } from '../components/EntryCard';
import { DeleteModal } from '../components/DeleteModal';

interface HomeScreenProps {
  entries: JournalEntry[];
  onCreateNew: () => void;
  onEditEntry: (entry: JournalEntry) => void;
  onDeleteEntry: (entryId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  entries,
  onCreateNew,
  onEditEntry,
  onDeleteEntry
}) => {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const handleDelete = (entryId: string) => {
    setDeleteConfirmId(entryId);
  };

  const confirmDelete = () => {
    if (deleteConfirmId) {
      onDeleteEntry(deleteConfirmId);
      setDeleteConfirmId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>✨ Reflect</Text>
        <Text style={styles.subtitle}>Your Personal Journal</Text>
      </View>

      <TouchableOpacity onPress={onCreateNew} style={styles.newEntryButton}>
        <Text style={styles.newEntryButtonText}>+ New Entry</Text>
      </TouchableOpacity>

      <ScrollView style={styles.entriesContainer}>
        {entries.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No entries yet</Text>
            <Text style={styles.emptySubtitle}>
              Start your journaling journey by creating your first entry
            </Text>
          </View>
        ) : (
          entries.map(entry => (
            <EntryCard
              key={entry.id}
              entry={entry}
              onEdit={onEditEntry}
              onDelete={handleDelete}
            />
          ))
        )}
      </ScrollView>

      <DeleteModal
        isVisible={!!deleteConfirmId}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6366f1',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 4,
  },
  newEntryButton: {
    backgroundColor: '#6366f1',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  newEntryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  entriesContainer: {
    flex: 1,
    padding: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
}); 