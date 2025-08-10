# Reflect ✨

**A beautiful React Native journal app with markdown support and local storage.**

## 🎯 Project Status

**Current Version: v0.1.0 (Local Storage MVP)**
- ✅ **Core journaling functionality** - Create, edit, delete entries
- ✅ **Rich text editor** with markdown formatting
- ✅ **Cross-platform** - iOS, Android, and Web
- ✅ **Local storage** - All data stays on your device
- 🔄 **In Development** - Supabase backend integration
- 📋 **Planned** - AI-powered insights and cloud sync

## ✨ Current Features

- **📝 Rich Text Editor** with markdown formatting (bold, italic, headings, bullets)
- **💾 Local Storage** - Your entries are saved locally on your device
- **🎨 Clean UI** - Modern, intuitive interface with React Native Paper
- **📱 Cross-Platform** - Works on iOS, Android, and Web via Expo
- **⚡ Fast & Responsive** - Built with React Native and Expo
- **🔒 Private** - All data stays on your device
- **🔄 Offline-First** - Works without internet connection

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun
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
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   bun start
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
- **React Native Paper** - Material Design components

## 🗺️ Roadmap

### **Phase 1: Backend Integration (Current)**
- 🔄 **Supabase Setup** - Database, authentication, and real-time sync
- 🔄 **User Accounts** - Sign up, login, and data persistence
- 📋 **Cloud Sync** - Backup entries across devices

### **Phase 2: AI Features (Next)**
- 📋 **AI Chat Integration** - GPT-4o/Claude-3 powered insights
- 📋 **Smart Summaries** - AI-generated entry summaries
- 📋 **Writing Prompts** - AI-suggested journaling topics

### **Phase 3: Advanced Features**
- 📋 **Push Notifications** - Daily reminders and prompts
- 📋 **Analytics Dashboard** - Writing streaks and insights
- 📋 **Export Options** - PDF, Markdown, and JSON export
- 📋 **Dark Mode** - Theme switching support

### **Phase 4: Integrations**
- 📋 **Notion Sync** - Two-way integration with Notion
- 📋 **HealthKit Integration** - Mood and wellness tracking
- 📋 **Calendar Hooks** - Event-based journaling prompts

## 🔮 Future Vision

Reflect aims to become a comprehensive AI-powered journaling platform that helps users:
- **Capture thoughts** with a beautiful, distraction-free interface
- **Gain insights** through AI-powered analysis and reflection
- **Build habits** with smart reminders and streak tracking
- **Connect dots** across time with intelligent search and linking
- **Share growth** through guided reviews and goal tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain component reusability
- Add proper error handling
- Test on multiple platforms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using React Native and Expo
- Inspired by the need for a simple, beautiful journaling experience
- Refactored from a monolithic structure to a clean component-based architecture
- Special thanks to the React Native and Expo communities

---

**Made with ✨ by Christopher Silvestri**

*Reflect - Turn thoughts into insights*


