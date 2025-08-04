import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EntryCardProps } from '../types';
import { formatDate } from '../utils/dateFormatter';
import { renderFormattedContent } from '../utils/markdownRenderer';

export const EntryCard: React.FC<EntryCardProps> = ({
  entry,
  onEdit,
  onDelete
}) => {
  return (
    <View style={styles.entryCard}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryTitle}>
          {entry.title || 'Untitled Entry'}
        </Text>
        <Text style={styles.entryDate}>
          {formatDate(entry.updatedAt)}
        </Text>
      </View>
      
      <View style={styles.entryPreview}>
        {renderFormattedContent({ text: entry.content || 'No content', styles })}
      </View>
      
      <View style={styles.entryActions}>
        <TouchableOpacity 
          onPress={() => onEdit(entry)} 
          style={styles.actionButton}
        >
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => onDelete(entry.id)} 
          style={[styles.actionButton, styles.deleteButton]}
        >
          <Text style={[styles.actionButtonText, styles.deleteButtonText]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  entryDate: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 8,
  },
  entryPreview: {
    marginBottom: 12,
  },
  normalText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 8,
    marginBottom: 4,
  },
  bulletText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginLeft: 20,
  },
  entryActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#f3f4f6',
  },
  actionButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#fef2f2',
  },
  deleteButtonText: {
    color: '#dc2626',
  },
}); 