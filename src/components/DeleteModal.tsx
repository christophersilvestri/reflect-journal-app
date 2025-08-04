import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DeleteModalProps } from '../types';

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isVisible,
  onConfirm,
  onCancel
}) => {
  if (!isVisible) return null;

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Delete Entry</Text>
        <Text style={styles.modalText}>
          Are you sure you want to delete this entry? This action cannot be undone.
        </Text>
        <View style={styles.modalActions}>
          <TouchableOpacity onPress={onCancel} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onConfirm} style={[styles.modalButton, styles.modalDeleteButton]}>
            <Text style={[styles.modalButtonText, styles.modalDeleteButtonText]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    margin: 20,
    maxWidth: 400,
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 24,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f3f4f6',
  },
  modalButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  modalDeleteButton: {
    backgroundColor: '#fef2f2',
  },
  modalDeleteButtonText: {
    color: '#dc2626',
  },
}); 