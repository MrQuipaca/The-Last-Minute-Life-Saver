Prompts for Each File

1. index.html
Prompt:  
*"Generate a complete HTML file using Bootstrap that includes:

A task input form (fields: title, deadline, priority dropdown).

A section to display tasks in cards.

A dashboard area with placeholders for progress bar and streaks.
Ensure the layout is responsive and mobile‑friendly."*

2. style.css
Prompt:  
*"Generate a CSS file that enhances Bootstrap styling with:

Modern card design for tasks.

Custom progress bar styling for the dashboard.

Gamification badges (streaks, points) with vibrant colors.
Keep the design clean, professional, and engaging."*

3. firebase.js
Prompt:  
*"Generate a JavaScript file that initializes Firebase Firestore and Authentication.
Include functions to:

Add tasks to Firestore.

Fetch tasks in real time.

Trigger notifications when deadlines are near.
Use modular Firebase SDK imports."*

4. app.js
Prompt:  
*"Generate a JavaScript file that handles core logic:

Capture task input from index.html.

Store tasks in Firebase.

Call Google AI Studio API to categorize tasks (urgent/important/routine).

Update the UI with category and suggested schedule."*

5. ai.js
Prompt:  
"Generate a JavaScript file that connects to Google AI Studio API.
Send task description + deadline, receive categorization and scheduling suggestion, and return structured output to app.js.
Ensure error handling and JSON parsing are included."

6. dashboard.js
Prompt:  
*"Generate a JavaScript file that builds a dashboard with:

Progress bar showing completed vs pending tasks.

Streak counter for consecutive on‑time completions.

Points system for gamification.
Update the dashboard dynamically when tasks are completed."*

7. demo.js
Prompt:  
*"Generate a JavaScript file that simulates demo scenarios:

Assignment due tomorrow.

Bill payment today.

Meeting prep in 2 days.
Run through AI categorization, scheduling, reminders, and dashboard updates.
Ensure outputs are clear for hackathon judges."*

🎯 Hackathon Tip
Feed each of these prompts separately into Google AI Studio. It will generate the code for each file. Then copy the outputs into your VS Code project structure:


project/
 ├── index.html
 ├── style.css
 ├── firebase.js
 ├── app.js
 ├── ai.js
 ├── dashboard.js
 └── demo.js
