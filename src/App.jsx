import React, { useState, useEffect } from 'react';
import { Camera, Video, BookOpen, Users, Calendar, MessageSquare, Award, BarChart3, Bell, Search, Menu, X, Play, Clock, CheckCircle, Star, Download, Upload, Eye, FileText, Settings, LogOut, ChevronRight, TrendingUp, Activity, Globe } from 'lucide-react';

const LearningPlatform = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [userRole, setUserRole] = useState('student'); // 'student' or 'instructor'
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [notifications, setNotifications] = useState(3);

  // Sample data
  const courses = [
    { id: 1, name: 'Cloud Computing Fundamentals', instructor: 'Dr. Saniya Mazumber', progress: 75, nextClass: '2024-02-08 10:00', students: 42, rating: 4.8, image: '☁️' },
    { id: 2, name: 'Data Structures & Algorithms', instructor: 'Prof. Anshu Khan', progress: 60, nextClass: '2024-02-07 14:00', students: 38, rating: 4.9, image: '🔢' },
    { id: 3, name: 'Web Development Masterclass', instructor: 'Aadiya Gupta', progress: 45, nextClass: '2024-02-09 16:00', students: 55, rating: 4.7, image: '💻' },
  ];

  const upcomingClasses = [
    { id: 1, course: 'Data Structures', time: '14:00 - 15:30', date: 'Today', type: 'Live Lecture', instructor: 'Prof. Khan' },
    { id: 2, course: 'Cloud Computing', time: '10:00 - 11:30', date: 'Tomorrow', type: 'Lab Session', instructor: 'Dr. Mazunder' },
    { id: 3, course: 'Web Development', time: '16:00 - 17:30', date: 'Feb 09', type: 'Workshop', instructor: 'Aadiya Gupta' },
  ];

  const assessments = [
    { id: 1, title: 'Cloud Architecture Quiz', course: 'Cloud Computing', dueDate: '2024-02-10', type: 'Quiz', status: 'pending' },
    { id: 2, title: 'Algorithm Analysis Assignment', course: 'Data Structures', dueDate: '2024-02-12', type: 'Assignment', status: 'submitted' },
    { id: 3, title: 'Final Project Submission', course: 'Web Development', dueDate: '2024-02-15', type: 'Project', status: 'pending' },
  ];

  const DashboardView = () => (
    <div className="dashboard-content">
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>Welcome back, Anshu Khan! 🎓</h1>
          <p>You have 3 upcoming classes and 2 pending assignments</p>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <TrendingUp size={24} />
            <div>
              <h3>75%</h3>
              <p>Avg. Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <Award size={24} />
            <div>
              <h3>12</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <Activity size={24} />
            <div>
              <h3>8.5hrs</h3>
              <p>This Week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="main-section">
          <div className="section-header">
            <h2>My Courses</h2>
            <button className="btn-text">View All <ChevronRight size={16} /></button>
          </div>
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card" onClick={() => {setSelectedCourse(course); setActiveView('course-detail');}}>
                <div className="course-header">
                  <div className="course-icon">{course.image}</div>
                  <div className="course-rating">
                    <Star size={14} fill="currentColor" />
                    {course.rating}
                  </div>
                </div>
                <h3>{course.name}</h3>
                <p className="instructor-name">{course.instructor}</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                </div>
                <div className="course-meta">
                  <span>{course.progress}% Complete</span>
                  <span className="next-class">
                    <Clock size={14} />
                    Next: {new Date(course.nextClass).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header" style={{marginTop: '40px'}}>
            <h2>Upcoming Classes</h2>
            <button className="btn-text">Calendar <Calendar size={16} /></button>
          </div>
          <div className="schedule-list">
            {upcomingClasses.map(cls => (
              <div key={cls.id} className="schedule-item">
                <div className="schedule-time">
                  <div className="time-badge">{cls.time}</div>
                  <span className="date-text">{cls.date}</span>
                </div>
                <div className="schedule-details">
                  <h4>{cls.course}</h4>
                  <p>{cls.type} • {cls.instructor}</p>
                </div>
                <button className="btn-primary join-btn">
                  <Video size={16} />
                  Join Class
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <div className="widget">
            <h3>Pending Assessments</h3>
            <div className="assessment-list">
              {assessments.filter(a => a.status === 'pending').map(assessment => (
                <div key={assessment.id} className="assessment-item">
                  <div className="assessment-icon">
                    {assessment.type === 'Quiz' ? '📝' : assessment.type === 'Assignment' ? '📄' : '🎯'}
                  </div>
                  <div className="assessment-info">
                    <h4>{assessment.title}</h4>
                    <p>{assessment.course}</p>
                    <span className="due-date">Due: {new Date(assessment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <h3>Study Streak 🔥</h3>
            <div className="streak-display">
              <div className="streak-number">7</div>
              <p>Days in a row!</p>
            </div>
            <div className="streak-calendar">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className={`streak-day ${i < 5 ? 'active' : ''}`}>{day}</div>
              ))}
            </div>
          </div>

          <div className="widget">
            <h3>Announcements</h3>
            <div className="announcement-list">
              <div className="announcement-item">
                <Bell size={16} />
                <p>New assignment posted in Cloud Computing</p>
                <span>2 hours ago</span>
              </div>
              <div className="announcement-item">
                <Bell size={16} />
                <p>Class schedule updated for next week</p>
                <span>1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CourseDetailView = () => (
    <div className="course-detail">
      <button className="btn-text back-btn" onClick={() => setActiveView('dashboard')}>
        ← Back to Dashboard
      </button>
      
      <div className="course-hero">
        <div className="course-hero-content">
          <div className="course-hero-icon">{selectedCourse?.image}</div>
          <div>
            <h1>{selectedCourse?.name}</h1>
            <p className="course-instructor">Instructor: {selectedCourse?.instructor}</p>
            <div className="course-hero-meta">
              <span><Users size={16} /> {selectedCourse?.students} Students</span>
              <span><Star size={16} fill="currentColor" /> {selectedCourse?.rating} Rating</span>
              <span><Clock size={16} /> 12 Weeks</span>
            </div>
          </div>
        </div>
        <div className="course-actions">
          <button className="btn-primary">
            <Video size={18} />
            Join Live Class
          </button>
          <button className="btn-outline">
            <MessageSquare size={18} />
            Discussions
          </button>
        </div>
      </div>

      <div className="course-tabs">
        <button className="tab active">Content</button>
        <button className="tab">Assignments</button>
        <button className="tab">Grades</button>
        <button className="tab">Resources</button>
      </div>

      <div className="course-content-grid">
        <div className="course-main">
          <div className="module-list">
            {[1, 2, 3, 4].map(module => (
              <div key={module} className="module-card">
                <div className="module-header">
                  <h3>Module {module}: Cloud Architecture Basics</h3>
                  <span className="module-progress">4/6 completed</span>
                </div>
                <div className="lesson-list">
                  {[1, 2, 3].map(lesson => (
                    <div key={lesson} className="lesson-item">
                      <CheckCircle size={18} className="lesson-check completed" />
                      <Play size={14} className="lesson-icon" />
                      <div className="lesson-info">
                        <h4>Introduction to Cloud Services</h4>
                        <span>12:45 • Video Lecture</span>
                      </div>
                      <button className="btn-icon">
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                  <div className="lesson-item">
                    <div className="lesson-check"></div>
                    <FileText size={14} className="lesson-icon" />
                    <div className="lesson-info">
                      <h4>Cloud Computing Quiz</h4>
                      <span>10 Questions • Due Feb 10</span>
                    </div>
                    <button className="btn-primary-small">Start Quiz</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="widget">
            <h3>Progress Overview</h3>
            <div className="circular-progress">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="8" 
                  strokeDasharray={`${selectedCourse?.progress * 2.51} 251`} strokeLinecap="round" 
                  transform="rotate(-90 50 50)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="progress-text">{selectedCourse?.progress}%</div>
            </div>
          </div>

          <div className="widget">
            <h3>Upcoming Deadlines</h3>
            <div className="deadline-list">
              <div className="deadline-item urgent">
                <Calendar size={16} />
                <div>
                  <h4>Assignment 3</h4>
                  <span>Due in 2 days</span>
                </div>
              </div>
              <div className="deadline-item">
                <Calendar size={16} />
                <div>
                  <h4>Project Milestone</h4>
                  <span>Due in 5 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="widget">
            <h3>Resources</h3>
            <div className="resource-list">
              <button className="resource-item">
                <FileText size={16} />
                Lecture Notes.pdf
                <Download size={14} />
              </button>
              <button className="resource-item">
                <FileText size={16} />
                Lab Manual.pdf
                <Download size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AssessmentsView = () => (
    <div className="assessments-view">
      <div className="view-header">
        <h1>Assessments & Quizzes</h1>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search assessments..." />
          </div>
          <select className="filter-select">
            <option>All Courses</option>
            <option>Cloud Computing</option>
            <option>Data Structures</option>
          </select>
        </div>
      </div>

      <div className="assessment-categories">
        <div className="category-card">
          <h3>Pending</h3>
          <span className="count">2</span>
        </div>
        <div className="category-card">
          <h3>Submitted</h3>
          <span className="count">5</span>
        </div>
        <div className="category-card">
          <h3>Graded</h3>
          <span className="count">8</span>
        </div>
      </div>

      <div className="assessment-grid">
        {assessments.map(assessment => (
          <div key={assessment.id} className={`assessment-card ${assessment.status}`}>
            <div className="assessment-card-header">
              <div className="assessment-type-badge">{assessment.type}</div>
              <span className={`status-badge ${assessment.status}`}>
                {assessment.status === 'pending' ? 'Pending' : 'Submitted'}
              </span>
            </div>
            <h3>{assessment.title}</h3>
            <p className="assessment-course">{assessment.course}</p>
            <div className="assessment-footer">
              <div className="due-info">
                <Clock size={16} />
                Due: {new Date(assessment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              {assessment.status === 'pending' ? (
                <button className="btn-primary">Start Assessment</button>
              ) : (
                <button className="btn-outline">View Submission</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LiveClassView = () => (
    <div className="live-class-view">
      <div className="video-container">
        <div className="video-placeholder">
          <Video size={64} />
          <h2>Cloud Computing - Live Lecture</h2>
          <p>Dr. Saniya Mazunder</p>
          <button className="btn-primary btn-large">
            <Camera size={20} />
            Join with Video
          </button>
          <button className="btn-outline btn-large">
            Join Audio Only
          </button>
        </div>
      </div>
      
      <div className="class-sidebar">
        <div className="class-tabs">
          <button className="tab active">Chat</button>
          <button className="tab">Participants (42)</button>
          <button className="tab">Q&A</button>
        </div>
        
        <div className="chat-container">
          <div className="chat-messages">
            <div className="chat-message">
              <strong>John Doe:</strong> Great explanation!
            </div>
            <div className="chat-message">
              <strong>Jane Smith:</strong> Can you repeat the last part?
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button><MessageSquare size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="learning-platform">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #f8fafc;
          color: #0f172a;
        }

        .learning-platform {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        /* Sidebar */
        .sidebar {
          width: 280px;
          background: white;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          z-index: 100;
          transition: transform 0.3s ease;
        }

        .sidebar.closed {
          transform: translateX(-280px);
        }

        .logo {
          padding: 28px 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 20px;
        }

        .logo h2 {
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          flex: 1;
          padding: 24px 12px;
          overflow-y: auto;
        }

        .nav-section {
          margin-bottom: 32px;
        }

        .nav-section-title {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          padding: 0 12px;
          margin-bottom: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          margin: 4px 0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          color: #64748b;
          font-weight: 500;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover {
          background: #f1f5f9;
          color: #334155;
        }

        .nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .user-profile {
          padding: 20px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .user-info h4 {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .user-info p {
          font-size: 12px;
          color: #64748b;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          margin-left: 280px;
          transition: margin-left 0.3s ease;
        }

        .main-content.expanded {
          margin-left: 0;
        }

        /* Header */
        .header {
          background: white;
          padding: 20px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.2s;
        }

        .menu-toggle:hover {
          background: #f1f5f9;
          color: #334155;
        }

        .search-bar {
          position: relative;
          width: 400px;
        }

        .search-bar input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 14px;
          transition: all 0.2s;
        }

        .search-bar input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .search-bar svg {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.2s;
        }

        .notification-btn:hover {
          background: #f1f5f9;
          color: #334155;
        }

        .notification-badge {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 18px;
          height: 18px;
          background: #ef4444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          font-weight: 600;
          border: 2px solid white;
        }

        .role-toggle {
          display: flex;
          background: #f1f5f9;
          border-radius: 10px;
          padding: 4px;
        }

        .role-btn {
          padding: 8px 16px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 8px;
          font-weight: 500;
          font-size: 13px;
          color: #64748b;
          transition: all 0.2s;
        }

        .role-btn.active {
          background: white;
          color: #667eea;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        /* Dashboard Content */
        .dashboard-content {
          padding: 32px;
        }

        .welcome-banner {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 40px;
          color: white;
          margin-bottom: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
        }

        .welcome-text h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .welcome-text p {
          font-size: 16px;
          opacity: 0.95;
        }

        .quick-stats {
          display: flex;
          gap: 16px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 140px;
        }

        .stat-card svg {
          width: 24px;
          height: 24px;
          opacity: 0.9;
        }

        .stat-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-card p {
          font-size: 13px;
          opacity: 0.85;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
        }

        .btn-text {
          background: none;
          border: none;
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-text:hover {
          background: #f1f5f9;
        }

        /* Course Cards */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .course-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.3s;
          border: 1px solid #e2e8f0;
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .course-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .course-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #fef3c7;
          color: #d97706;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .course-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .instructor-name {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 16px;
        }

        .progress-bar {
          height: 6px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          transition: width 0.5s ease;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #64748b;
        }

        .next-class {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Schedule List */
        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .schedule-item {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .schedule-time {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 100px;
        }

        .time-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .date-text {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .schedule-details {
          flex: 1;
        }

        .schedule-details h4 {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .schedule-details p {
          font-size: 14px;
          color: #64748b;
        }

        .join-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Buttons */
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-primary-small {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-outline {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: #667eea;
          color: white;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 16px;
        }

        .btn-icon {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          color: #64748b;
          transition: all 0.2s;
        }

        .btn-icon:hover {
          background: #f1f5f9;
          color: #334155;
        }

        /* Sidebar Section */
        .sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .widget {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .widget h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .assessment-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .assessment-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 10px;
          background: #f8fafc;
          cursor: pointer;
          transition: all 0.2s;
        }

        .assessment-item:hover {
          background: #f1f5f9;
        }

        .assessment-icon {
          font-size: 24px;
        }

        .assessment-info h4 {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .assessment-info p {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 6px;
        }

        .due-date {
          font-size: 11px;
          color: #ef4444;
          font-weight: 600;
        }

        .streak-display {
          text-align: center;
          padding: 20px;
          margin-bottom: 16px;
        }

        .streak-number {
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .streak-display p {
          font-size: 14px;
          color: #64748b;
          margin-top: 8px;
        }

        .streak-calendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .streak-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f1f5f9;
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
        }

        .streak-day.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .announcement-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .announcement-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px;
          border-radius: 10px;
          background: #f8fafc;
        }

        .announcement-item svg {
          color: #667eea;
          align-self: flex-start;
        }

        .announcement-item p {
          font-size: 13px;
          color: #1e293b;
          line-height: 1.5;
        }

        .announcement-item span {
          font-size: 11px;
          color: #94a3b8;
        }

        /* Course Detail View */
        .course-detail {
          padding: 32px;
        }

        .back-btn {
          margin-bottom: 24px;
          font-size: 14px;
        }

        .course-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 40px;
          color: white;
          margin-bottom: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .course-hero-content {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .course-hero-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }

        .course-hero h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .course-instructor {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 16px;
        }

        .course-hero-meta {
          display: flex;
          gap: 24px;
          font-size: 14px;
        }

        .course-hero-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.95;
        }

        .course-actions {
          display: flex;
          gap: 12px;
        }

        .course-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          border-bottom: 2px solid #e2e8f0;
        }

        .tab {
          padding: 12px 24px;
          background: none;
          border: none;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .tab:hover {
          color: #334155;
        }

        .tab.active {
          color: #667eea;
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }

        .course-content-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
        }

        .module-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .module-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .module-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
        }

        .module-progress {
          font-size: 13px;
          color: #667eea;
          font-weight: 600;
        }

        .lesson-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lesson-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 10px;
          transition: all 0.2s;
        }

        .lesson-item:hover {
          background: #f8fafc;
        }

        .lesson-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #cbd5e1;
          flex-shrink: 0;
        }

        .lesson-check.completed {
          border-color: #22c55e;
          color: #22c55e;
        }

        .lesson-icon {
          color: #667eea;
          flex-shrink: 0;
        }

        .lesson-info {
          flex: 1;
        }

        .lesson-info h4 {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .lesson-info span {
          font-size: 12px;
          color: #64748b;
        }

        .circular-progress {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
        }

        .circular-progress svg {
          transform: rotate(-90deg);
        }

        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 28px;
          font-weight: 700;
          color: #667eea;
        }

        .deadline-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deadline-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 10px;
          background: #f8fafc;
          align-items: center;
        }

        .deadline-item.urgent {
          background: #fef2f2;
          border: 1px solid #fee2e2;
        }

        .deadline-item svg {
          color: #667eea;
          flex-shrink: 0;
        }

        .deadline-item.urgent svg {
          color: #ef4444;
        }

        .deadline-item h4 {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2px;
        }

        .deadline-item span {
          font-size: 12px;
          color: #64748b;
        }

        .resource-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .resource-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          text-align: left;
          font-size: 13px;
          color: #1e293b;
          font-weight: 500;
        }

        .resource-item:hover {
          background: #f1f5f9;
        }

        .resource-item svg:first-child {
          color: #667eea;
        }

        .resource-item svg:last-child {
          margin-left: auto;
          color: #94a3b8;
        }

        /* Assessments View */
        .assessments-view {
          padding: 32px;
        }

        .view-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .view-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1e293b;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .search-box {
          position: relative;
          width: 300px;
        }

        .search-box input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
        }

        .search-box svg {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .filter-select {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          color: #334155;
          background: white;
          cursor: pointer;
        }

        .assessment-categories {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .category-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
        }

        .category-card .count {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .assessment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }

        .assessment-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
        }

        .assessment-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .assessment-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .assessment-type-badge {
          background: #f1f5f9;
          color: #667eea;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.pending {
          background: #fef3c7;
          color: #d97706;
        }

        .status-badge.submitted {
          background: #d1fae5;
          color: #059669;
        }

        .assessment-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .assessment-course {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 16px;
        }

        .assessment-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .due-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
        }

        /* Live Class View */
        .live-class-view {
          display: grid;
          grid-template-columns: 1fr 400px;
          height: calc(100vh - 72px);
        }

        .video-container {
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-placeholder {
          text-align: center;
          color: white;
        }

        .video-placeholder svg {
          margin-bottom: 24px;
          opacity: 0.6;
        }

        .video-placeholder h2 {
          font-size: 28px;
          margin-bottom: 8px;
        }

        .video-placeholder p {
          font-size: 16px;
          opacity: 0.8;
          margin-bottom: 32px;
        }

        .video-placeholder button {
          margin: 8px;
        }

        .class-sidebar {
          background: white;
          border-left: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
        }

        .class-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          padding: 0 16px;
        }

        .class-tabs .tab {
          flex: 1;
          text-align: center;
          padding: 16px 8px;
          font-size: 13px;
        }

        .chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .chat-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
        }

        .chat-message {
          padding: 12px;
          margin-bottom: 8px;
          background: #f8fafc;
          border-radius: 10px;
          font-size: 14px;
        }

        .chat-message strong {
          color: #667eea;
          margin-right: 8px;
        }

        .chat-input {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
        }

        .chat-input button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .course-content-grid {
            grid-template-columns: 1fr;
          }
          
          .sidebar-section {
            grid-template-columns: repeat(2, 1fr);
            display: grid;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-280px);
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .welcome-banner {
            flex-direction: column;
            gap: 24px;
          }
          
          .quick-stats {
            flex-direction: column;
            width: 100%;
          }
          
          .stat-card {
            width: 100%;
          }
          
          .search-bar {
            display: none;
          }
          
          .live-class-view {
            grid-template-columns: 1fr;
          }
          
          .class-sidebar {
            display: none;
          }
        }
      `}</style>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
        <div className="logo">
          <div className="logo-icon">L</div>
          <h2>LearnHub</h2>
        </div>

        <div className="nav-menu">
          <div className="nav-section">
            <div className="nav-section-title">Main</div>
            <button className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}>
              <BarChart3 size={20} />
              Dashboard
            </button>
            <button className={`nav-item ${activeView === 'courses' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}>
              <BookOpen size={20} />
              My Courses
            </button>
            <button className={`nav-item ${activeView === 'live' ? 'active' : ''}`} onClick={() => setActiveView('live')}>
              <Video size={20} />
              Live Classes
            </button>
            <button className={`nav-item ${activeView === 'assessments' ? 'active' : ''}`} onClick={() => setActiveView('assessments')}>
              <FileText size={20} />
              Assessments
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Resources</div>
            <button className="nav-item">
              <Calendar size={20} />
              Schedule
            </button>
            <button className="nav-item">
              <MessageSquare size={20} />
              Discussions
            </button>
            <button className="nav-item">
              <Award size={20} />
              Achievements
            </button>
            <button className="nav-item">
              <Download size={20} />
              Resources
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Account</div>
            <button className="nav-item">
              <Settings size={20} />
              Settings
            </button>
            <button className="nav-item">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        <div className="user-profile">
          <div className="user-avatar">AS</div>
          <div className="user-info">
            <h4>Alex Smith</h4>
            <p>Student</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Search courses, lectures, resources..." />
            </div>
          </div>

          <div className="header-actions">
            <div className="role-toggle">
              <button className={`role-btn ${userRole === 'student' ? 'active' : ''}`} onClick={() => setUserRole('student')}>
                Student
              </button>
              <button className={`role-btn ${userRole === 'instructor' ? 'active' : ''}`} onClick={() => setUserRole('instructor')}>
                Instructor
              </button>
            </div>
            <button className="notification-btn">
              <Bell size={22} />
              {notifications > 0 && <span className="notification-badge">{notifications}</span>}
            </button>
          </div>
        </div>

        {/* Views */}
        {activeView === 'dashboard' && <DashboardView />}
        {activeView === 'course-detail' && <CourseDetailView />}
        {activeView === 'assessments' && <AssessmentsView />}
        {activeView === 'live' && <LiveClassView />}
      </div>
    </div>
  );
};

export default LearningPlatform;