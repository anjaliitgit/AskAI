# 🤖 AskAI

AskAI is a modern AI-powered chatbot built using the MERN stack and Google Gemini API. It provides an interactive conversational interface where users can ask questions, receive AI-generated responses, and maintain chat history. The application features a clean, responsive UI with persistent conversations stored in MongoDB.

---

## 🚀 Features

- 💬 AI-powered chatbot using Google Gemini API
- 📝 Persistent chat history with MongoDB
- ➕ Create multiple chat threads
- 🗑️ Delete chat conversations
- ⚡ Typing animation for AI responses
- 📖 Markdown support with syntax highlighting
- 🎨 Modern dark-themed responsive UI
- 🔄 Real-time conversation updates
- ☁️ MongoDB Atlas integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3
- React Markdown
- Rehype Highlight
- React Spinners

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Google Gemini API

---

## 📂 Project Structure

```
AskAI
│
├── Backend
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AskAI.git
cd AskAI
```

---

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend folder.

```env
PORT=8080
MONGODB_URI=YOUR_MONGODB_URI
OPENAI_API_KEY=YOUR_GEMINI_API_KEY
JWT_SECRET=YOUR_SECRET_KEY
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file inside the Backend directory.

```env
PORT=8080
MONGODB_URI=YOUR_MONGODB_URI
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
JWT_SECRET=YOUR_SECRET_KEY
```

---

## 📸 Screenshots

### Home Screen

> Add your project screenshot here.

### Chat Interface

> Add another screenshot here.

---

## 🎯 Future Improvements

- User Authentication
- Voice Chat
- Image Upload
- File Upload
- AI Chat Streaming
- Dark/Light Theme Toggle
- Export Chat as PDF
- Mobile Optimization

---

## 👩‍💻 Author

**Anjali Yadav**

## ⭐ If you like this project

Give it a ⭐ on GitHub!
