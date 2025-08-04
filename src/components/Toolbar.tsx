import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ToolbarProps } from '../types';

export const Toolbar: React.FC<ToolbarProps> = ({
  onBold,
  onItalic,
  onBullet,
  onHeading
}) => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={onBold} style={styles.toolbarButton}>
        <Text style={styles.toolbarButtonText}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onItalic} style={styles.toolbarButton}>
        <Text style={styles.toolbarButtonText}>I</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onBullet} style={styles.toolbarButton}>
        <Text style={styles.toolbarButtonText}>•</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHeading} style={styles.toolbarButton}>
        <Text style={styles.toolbarButtonText}>H</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    gap: 8,
  },
  toolbarButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  toolbarButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
}); 