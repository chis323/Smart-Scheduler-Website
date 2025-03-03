The application, Smart Scheduler Director, is a web-based scheduling tool designed to help users create and save weekly schedules. The interface provides a user-friendly layout for entering tasks for each day of the week and each hour between 8 AM and 10 PM. The application integrates with Firebase for storing and managing schedules.
Key Features
User Interface:
Fully responsive layout ensuring usability across devices.
Intuitive grid structure displaying 7 days (Monday to Sunday) with input fields for each hour (8 AM - 10 PM).
Task Input:
Each day has dedicated text input fields for hourly tasks.
Placeholder text ("Your Task") guides user input.
Schedule Management:
Users can name their schedules with a dedicated input field.
Option to save schedules to Firebase.
Firebase Integration:
Stores schedule data, including task details for each hour and schedule name.
Provides real-time database functionality.
Notifications:
Displays success or error notifications after attempting to save a schedule.
Error Handling:
Validates that a schedule name is entered before saving.
Logs warnings if an expected input field is missing.
Technology Stack
Frontend:
HTML5: For structure.
CSS3: For styling, including flexbox and grid for layout.
Backend:
Firebase Realtime Database: For schedule data storage.
