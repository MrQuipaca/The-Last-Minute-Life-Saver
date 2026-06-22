01
Project Setup
Start Here
Initialize your workspace and prepare the environment.

Create a new GitHub repo or local folder

Set up Firebase project for backend

Install Bootstrap for responsive UI

Prepare Google AI Studio account for AI integration

02
Task Input Form
Build the UI for adding tasks.

Create HTML form with fields: Title, Deadline, Priority

Connect form submission to Firebase

Ensure tasks are stored in real-time database

03
AI Task Categorization
Use AI to classify tasks by urgency and importance.

Send task data to Google AI Studio

Implement categorization logic (urgent vs. important)

Display category labels in UI

04
Smart Scheduling
Integrate calendar and suggest optimal time slots.

Connect Google Calendar API

Fetch user’s free slots

Suggest schedule based on deadlines and workload

Display recommendations in dashboard

05
Context-Aware Reminders
Key Feature
Notify users with actionable alerts.

Set Firebase triggers for deadlines

Push notifications or in-app alerts

Example: “Meeting in 30 mins, prep slides now”

06
Goal Tracking Dashboard
Visualize progress and motivate users.

Build dashboard with Bootstrap cards

Show completed vs. pending tasks

Add streaks or points for gamification

07
Stretch Features
Enhance app with advanced capabilities.

Voice-enabled task input

AI auto-break tasks into subtasks

Personalized productivity recommendations

08
UI Polish
Make the app visually appealing and demo-ready.

Apply Bootstrap themes

Ensure mobile responsiveness

Add icons for tasks and reminders

09
Demo Script
Final Step
Prepare a smooth presentation flow.

Start with relatable pain point

Show task input → AI categorization → scheduling → reminder → dashboard

End with impact statement: “This is how AI saves your day.”


Working:
User adds task → Firebase stores → AI Studio categorizes → Calendar slot suggested.



PART II - Prompts

1. index.html (UI Skeleton)
Prompt:  
"Create a clean, responsive HTML layout with Bootstrap that includes: a task input form (title, deadline, priority), a task list section, and a dashboard area for progress tracking."

Build: Form → Task list → Dashboard placeholders.

Evaluation: Covers Problem Solving & Design.

2. style.css (Custom Styling)
Prompt:  
"Add custom CSS to enhance Bootstrap: modern card design for tasks, progress bar styling for dashboard, and gamification badges (streaks/points) with vibrant colors."

Build: Visual polish + gamification look.

Evaluation: Covers Product Experience & Creativity.

3. firebase.js (Backend Setup)
Prompt:  
"Initialize Firebase Firestore and Authentication. Create functions to add tasks, fetch tasks in real time, and trigger notifications when deadlines are near."

Build: Real‑time storage + reminders.

Evaluation: Covers Technical Implementation.

4. app.js (Core Logic)
Prompt:  
"Implement task input handling: when user submits a task, store it in Firebase, call Google AI Studio API for categorization (urgent/important/routine), and update UI with category + suggested schedule."

Build: Task flow end‑to‑end.

Evaluation: Covers Problem Solving & Agentic Depth.

5. ai.js (Google AI Studio Integration)
Prompt:  
"Connect to Google AI Studio API. Send task description + deadline, receive categorization and scheduling suggestion, and return structured output to app.js."

Build: AI categorization + smart scheduling.

Evaluation: Covers Usage of Google Technologies.

6. dashboard.js (Gamification + Tracking)
Prompt:  
"Build a dashboard that shows: progress bar of completed vs pending tasks, streak counter for consecutive on‑time completions, and points system for gamification."

Build: Motivation + creativity.

Evaluation: Covers Innovation & Creativity.

7. demo.js (Demo Flow Script)
Prompt:  
"Create demo scenarios: assignment due tomorrow, bill payment today, meeting prep in 2 days. Simulate AI categorization, scheduling, reminders, and dashboard updates for judges."

Build: Smooth demo loop.

Evaluation: Covers Completeness & Usability.
