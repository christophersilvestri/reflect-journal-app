# Reflect ✨

**A beautiful React Native journal app with markdown support and local storage.**

## ✨ Features

- **📝 Rich Text Editor** with markdown formatting (bold, italic, headings, bullets)
- **💾 Local Storage** - Your entries are saved locally on your device
- **🎨 Clean UI** - Modern, intuitive interface
- **📱 Cross-Platform** - Works on iOS, Android, and Web
- **⚡ Fast & Responsive** - Built with React Native and Expo
- **🔒 Private** - All data stays on your device

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/christophersilvestri/reflect-journal-app.git
   cd reflect-journal-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   - **Web**: Press `w` in the terminal
   - **iOS**: Press `i` (requires Xcode)
   - **Android**: Press `a` (requires Android Studio)
   - **Mobile**: Scan QR code with Expo Go app

## 📱 How to Use

### Creating Entries
1. Tap **"+ New Entry"** on the home screen
2. Add an optional title
3. Write your thoughts with rich formatting
4. Use the toolbar for **Bold**, *Italic*, • Bullets, and # Headings
5. Tap **"Save"** when done

### Editing Entries
1. Tap **"Edit"** on any entry card
2. Make your changes
3. Tap **"Save"** to update

### Deleting Entries
1. Tap **"Delete"** on any entry card
2. Confirm deletion in the modal

## 🏗️ Architecture

The app is built with a clean, component-based architecture:

```
src/
├── components/          # Reusable UI components
│   ├── EntryCard.tsx   # Individual entry display
│   ├── Toolbar.tsx     # Text formatting buttons
│   ├── DeleteModal.tsx # Confirmation dialogs
│   └── LoadingSpinner.tsx
├── screens/            # Main app screens
│   ├── HomeScreen.tsx  # Entry list
│   ├── EditorScreen.tsx # Writing interface
│   └── LoadingScreen.tsx
├── hooks/              # Custom React hooks
│   └── useJournalEntries.ts # Data management
├── utils/              # Utility functions
│   ├── dateFormatter.ts
│   └── markdownRenderer.tsx
├── types/              # TypeScript interfaces
└── constants/          # App constants
```

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type safety and better development experience
- **AsyncStorage** - Local data persistence
- **React Navigation** - Screen navigation (ready for future use)

## 🔮 Future Features

- **🔍 Search functionality** - Find entries by title or content
- **🏷️ Categories/Tags** - Organize entries with tags
- **☁️ Cloud sync** - Backup and sync across devices
- **🌙 Dark mode** - Theme switching
- **📤 Export** - Export entries as PDF or text
- **📊 Statistics** - Writing streaks and insights
- **🔔 Reminders** - Daily journaling prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using React Native and Expo
- Inspired by the need for a simple, beautiful journaling experience
- Refactored from a monolithic structure to a clean component-based architecture

---

**Made with ✨ by Christopher Silvestri**
