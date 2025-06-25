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

| Layer         | Technologies Used                          |
|---------------|---------------------------------------------|
| Frontend      | React.js, Next.js, Tailwind CSS, HTML5 Canvas |
| State/UI      | Recoil, Framer Motion                       |
| Backend       | Node.js, Express, Socket.IO                 |                                    |
| Auth (Mocked) | JWT-ready structure                         |
| Hosting       | Vercel (Frontend)         |

---

## 🧪 Running Locally (Development Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/whiteboard.git
cd whiteboard
npm install 
npm install --save-dev nodemon
npm install --save-dev ts-node typescript
npm run dev

