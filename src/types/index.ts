export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TextSelection {
  start: number;
  end: number;
}

export interface DeleteModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface EntryCardProps {
  entry: JournalEntry;
  onEdit: (entry: JournalEntry) => void;
  onDelete: (entryId: string) => void;
}

export interface JournalEditorProps {
  entry: JournalEntry | null;
  onSave: (entry: JournalEntry) => void;
  onCancel: () => void;
}

export interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onBullet: () => void;
  onHeading: () => void;
} 