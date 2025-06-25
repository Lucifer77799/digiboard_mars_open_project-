# 🧩 Real-Time Collaborative Whiteboard

## ✍️ Project Description

A web-based **real-time collaborative whiteboard** application that replicates the feel of a physical whiteboard for remote teams, educators, and creators. It enables multiple users to join a shared session and collaborate visually through drawing, writing, and sharing ideas — all in real-time.

This whiteboard is lightweight, easy to use, and offers a smooth interactive canvas powered by modern web technologies.

---

## 🔑 Key Features

- 🎨 **Drawing Tools**: Pen, Shapes (Rectangle & Circle), Eraser, Text Tool, Line Width, and Color Picker  
- 🧑‍🤝‍🧑 **Multi-User Collaboration**: Share a room URL to collaborate live  
- ⚡ **Real-Time Updates**: All actions are instantly reflected across connected users using WebSocket (Socket.IO)  
- 🔒 **Mocked Access Control**: UI support for public/private rooms with "edit" and "view-only" roles (not enforced server-side for simplicity)  
- 💾 **Save & Export**: Download your whiteboard as a high-quality PNG image  
- 🕹️ **Canvas Tools**: Undo, Redo, and Clear Canvas controls  
- 🖼️ **Image Upload**: Add and manipulate uploaded images on the canvas  
- 🧭 **MiniMap Navigation**: Drag-enabled overview of the full canvas  
- 🗣️  Chat Sidebar 

---

## 🛠️ Tech Stack

| Layer         | Technologies Used                                   |
|---------------|-----------------------------------------------------|
| Frontend      | React.js, Next.js, Tailwind CSS, HTML5 Canvas       |
| State/UI      | Recoil, Framer Motion                               |
| Backend       | Node.js, Express, Socket.IO                         |
| Auth (Mocked) | JWT-ready structure                                 |
| Hosting       | Vercel (Frontend)                                   |
| Database      | Local in-memory (default). Optionally, you can use Firebase, AWS, or any cloud database for global data persistence. See below for setup instructions. |

---

**Note:**  
By default, all whiteboard  data is stored locally in memory on the backend server (not persisted after restart).  
If you want to store data globally and persistently, you can easily integrate a cloud database such as Firebase, AWS DynamoDB, MongoDB Atlas, or deploy your own database on platforms like Render.
Moreover, deployment on vercel for nextjs based web application will not work for socket.io hence I dont use it for deployment

Instructions for integrating Firebase are provided below, but you can use any database solution that fits

---

### 🔗 Optional: Using Firebase as a Database

By default, this project does **not** use a database.  
If you want to persist whiteboard changes or user data, you can integrate [Firebase](https://firebase.google.com/):

1. **Create a Firebase Project:**  
   Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and add a web app.

2. **Install Firebase SDK:**  
   ```bash
   npm install firebase
   ```

3. **Configure Firebase:**  
   Add your Firebase config to your project (e.g., in `firebaseConfig.js`):

   ```js
   // firebaseConfig.js
   import { initializeApp } from "firebase/app";
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   export const app = initializeApp(firebaseConfig);
   ```

4. **Use Firestore or Realtime Database:**  
   Import and use Firestore or Realtime Database in your app to store and sync whiteboard data.

5. **Update Code:**  
   Replace in-memory storage with Firebase calls wherever you want to persist or sync data.

**Note:**  
Firebase setup is optional and not included in the default

---
## 🧪 Running Locally (Development Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/Lucifer77799/digiboard_mars_open_project-.git
```
This command downloads the project code from GitHub to your computer.

```bash
cd digiboard
```
Change directory to the folder where the repository was cloned.  
**Note:** If your folder has a different name, replace `digiboard` with your actual folder name.

```bash
npm install
```
Installs all required dependencies for the project.

```bash
npm install --save-dev nodemon
npm install --save-dev ts-node typescript
```
Installs development tools:  
- `nodemon` for automatic server restarts on code changes  
- `ts-node` and `typescript` for running TypeScript code

```bash
npm run dev
```
Starts the development server. The app will be available locally (at `http://localhost:3000`).

---
