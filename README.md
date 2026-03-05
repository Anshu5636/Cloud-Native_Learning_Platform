# 🎓 LearnHub - Cloud-Native Learning Platform

A modern, scalable learning management system built with React and designed for cloud deployment.

## ✨ Features

- 📚 **Course Management** - Browse, enroll, and track progress
- 🎥 **Live Classes** - Virtual classroom with video and chat
- 📝 **Assessments** - Quizzes, assignments, and projects
- 📊 **Analytics Dashboard** - Track learning progress and performance
- 👥 **Multi-role Support** - Student and Instructor interfaces
- 🔔 **Real-time Notifications** - Stay updated with announcements
- 📱 **Responsive Design** - Works on all devices
- 🎯 **Gamification** - Study streaks and achievements

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** - [Download here](https://code.visualstudio.com/)

### Step-by-Step Installation

#### 1. Open in VS Code

```bash
# Navigate to the project folder
cd path/to/learning-platform

# Open in VS Code
code .
```

#### 2. Install Dependencies

Open the integrated terminal in VS Code (`Ctrl + ~` or `View → Terminal`) and run:

```bash
npm install
```

This will install all required packages:
- React
- React DOM
- Lucide React (icons)
- Vite (build tool)

#### 3. Start Development Server

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

#### 4. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 📁 Project Structure

```
learning-platform/
├── src/
│   ├── App.jsx           # Main application component
│   └── main.jsx          # React entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎮 How to Use

### For Students:

1. **Dashboard** - View enrolled courses and upcoming classes
2. **My Courses** - Access course materials and track progress
3. **Live Classes** - Join virtual classrooms
4. **Assessments** - Complete quizzes and assignments
5. **Schedule** - Check your class timetable

### For Instructors:

1. Switch to "Instructor" mode using the toggle in the header
2. **Manage Courses** - Create and organize course content
3. **Conduct Classes** - Host live sessions
4. **Grade Assessments** - Review and grade student submissions
5. **Analytics** - Monitor student performance

## 🛠️ VS Code Setup Tips

### Recommended Extensions:

1. **ES7+ React/Redux/React-Native snippets** - Quick component creation
2. **Prettier** - Code formatting
3. **ESLint** - Code quality
4. **Auto Rename Tag** - HTML/JSX tag management

### Install Extensions:

Press `Ctrl+Shift+X` and search for the extension names above.

### Keyboard Shortcuts:

- `Ctrl + ~` - Open/close terminal
- `Ctrl + B` - Toggle sidebar
- `Ctrl + P` - Quick file search
- `Alt + Shift + F` - Format document
- `F5` - Start debugging

## 🎨 Customization

### Change Colors:

Edit the CSS in `src/App.jsx` - look for the gradient values:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add New Features:

1. Create new components in the `src` folder
2. Import them in `App.jsx`
3. Add navigation items in the sidebar

## 🔧 Troubleshooting

### Port Already in Use:

If port 3000 is busy, edit `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change to any available port
  open: true
}
```

### npm install fails:

Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Module not found errors:

Make sure you're in the correct directory and run:
```bash
npm install
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |

## 🌐 Cloud Deployment

This platform is designed for cloud deployment. You can deploy to:

- **Vercel** - `npm install -g vercel` → `vercel`
- **Netlify** - Drag & drop the `dist` folder
- **AWS Amplify** - Connect your Git repository
- **Google Cloud Platform** - Use Cloud Run
- **Azure** - Use App Service

## 🔐 Backend Integration

To connect with your cloud backend:

1. Add API endpoints in a `src/api` folder
2. Replace mock data with actual API calls
3. Implement authentication (JWT, OAuth)
4. Add state management (Context API, Redux)

## 📝 License

This project is created for educational purposes.

## 🤝 Support

For issues or questions:
- Check the troubleshooting section
- Review VS Code terminal output for errors
- Ensure all prerequisites are installed

---

**Happy Learning! 🎓✨**