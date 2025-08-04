import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { JournalEntry, TextSelection } from '../types';
import { Toolbar } from '../components/Toolbar';
import { DEFAULT_CONTENT_HEIGHT, LINE_HEIGHT, MIN_EDITOR_HEIGHT } from '../constants/storage';

interface EditorScreenProps {
  entry: JournalEntry | null;
  onSave: (entry: JournalEntry) => void;
  onCancel: () => void;
}

export const EditorScreen: React.FC<EditorScreenProps> = ({
  entry,
  onSave,
  onCancel
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentHeight, setContentHeight] = useState(DEFAULT_CONTENT_HEIGHT);
  const [selection, setSelection] = useState<TextSelection>({ start: 0, end: 0 });
  const contentInputRef = useRef<TextInput>(null);

  // Initialize with entry data if editing
  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setContent(entry.content);
      const lines = entry.content.split('\n').length;
      setContentHeight(Math.max(MIN_EDITOR_HEIGHT, lines * LINE_HEIGHT + 50));
    }
  }, [entry]);

  const insertText = (textToInsert: string) => {
    const before = content.slice(0, selection.start);
    const after = content.slice(selection.end);
    const newContent = before + textToInsert + after;
    setContent(newContent);
    
    // Set cursor position after inserted text
    const newPosition = selection.start + textToInsert.length;
    setSelection({ start: newPosition, end: newPosition });
    
    // Focus the input after insertion
    setTimeout(() => {
      contentInputRef.current?.focus();
      contentInputRef.current?.setSelection(newPosition, newPosition);
    }, 100);
  };

  const applyBold = () => {
    if (selection.start === selection.end) {
      insertText('**bold text**');
    } else {
      const selectedText = content.slice(selection.start, selection.end);
      const before = content.slice(0, selection.start);
      const after = content.slice(selection.end);
      const newContent = before + `**${selectedText}**` + after;
      setContent(newContent);
      
      // Update selection to include the formatting
      const newSelection = {
        start: selection.start,
        end: selection.end + 4 // +4 for the ** markers
      };
      setSelection(newSelection);
      
      setTimeout(() => {
        contentInputRef.current?.focus();
        contentInputRef.current?.setSelection(newSelection.start, newSelection.end);
      }, 100);
    }
  };

  const applyItalic = () => {
    if (selection.start === selection.end) {
      insertText('*italic text*');
    } else {
      const selectedText = content.slice(selection.start, selection.end);
      const before = content.slice(0, selection.start);
      const after = content.slice(selection.end);
      const newContent = before + `*${selectedText}*` + after;
      setContent(newContent);
      
      // Update selection to include the formatting
      const newSelection = {
        start: selection.start,
        end: selection.end + 2 // +2 for the * markers
      };
      setSelection(newSelection);
      
      setTimeout(() => {
        contentInputRef.current?.focus();
        contentInputRef.current?.setSelection(newSelection.start, newSelection.end);
      }, 100);
    }
  };

  const insertBullet = () => {
    insertText('\n• ');
  };

  const insertHeading = () => {
    // Insert heading at the beginning of the current line
    const lines = content.split('\n');
    const currentLineIndex = content.substring(0, selection.start).split('\n').length - 1;
    
    if (lines[currentLineIndex] && !lines[currentLineIndex].startsWith('#')) {
      lines[currentLineIndex] = '# ' + lines[currentLineIndex];
      const newContent = lines.join('\n');
      setContent(newContent);
      
      // Update cursor position
      const newPosition = selection.start + 2;
      setSelection({ start: newPosition, end: newPosition });
      
      setTimeout(() => {
        contentInputRef.current?.focus();
        contentInputRef.current?.setSelection(newPosition, newPosition);
      }, 100);
    } else {
      insertText('\n# ');
    }
  };

  const handleSave = () => {
    if (!title.trim() && !content.trim()) {
      if (typeof window !== 'undefined') {
        window.alert('Please add a title or content before saving.');
      }
      return;
    }

    const updatedEntry: JournalEntry = {
      id: entry?.id || Date.now().toString(),
      title: title.trim() || 'Untitled Entry',
      content: content.trim(),
      createdAt: entry?.createdAt || new Date(),
      updatedAt: new Date()
    };

    onSave(updatedEntry);
  };

  const handleCancel = () => {
    if (title.trim() || content.trim()) {
      if (typeof window !== 'undefined') {
        const confirmed = window.confirm('You have unsaved changes. Are you sure you want to discard them?');
        if (!confirmed) return;
      }
    }
    onCancel();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {entry ? 'Edit Entry' : 'New Entry'}
        </Text>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <Toolbar
        onBold={applyBold}
        onItalic={applyItalic}
        onBullet={insertBullet}
        onHeading={insertHeading}
      />

      <ScrollView style={styles.editorContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Entry title (optional)"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#9ca3af"
        />
        
        <TextInput
          ref={contentInputRef}
          style={[styles.contentInput, { height: contentHeight }]}
          placeholder="Start writing your thoughts..."
          value={content}
          onChangeText={(text) => {
            setContent(text);
            // Auto-expand based on content length
            const lines = text.split('\n').length;
            const newHeight = Math.max(MIN_EDITOR_HEIGHT, lines * LINE_HEIGHT + 50);
            setContentHeight(newHeight);
          }}
          onSelectionChange={(event) => {
            setSelection(event.nativeEvent.selection);
          }}
          multiline
          textAlignVertical="top"
          placeholderTextColor="#9ca3af"
          scrollEnabled={false}
        />
      </ScrollView>
      
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  editorContainer: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 20,
    padding: 0,
  },
  contentInput: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    padding: 0,
    minHeight: 200,
  },
}); 