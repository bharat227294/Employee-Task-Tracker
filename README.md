🚀 Employee Task Tracker – Frontend Application

A modern, responsive web application built using React + TypeScript + Vite, designed to manage employees and their work tasks efficiently.
The UI is designed in Figma Make, converted into a full frontend project, and enhanced with task filtering, status updates, employee management, and LocalStorage persistence.

📌 Features :
-> Feature	                                                                        Status
-> View employees & assigned tasks	                                                 ✅
-> Add new task to any employee	                                                     ✅
-> Add new employee (optional enhancement)	                                         ✅
-> Change task status (Pending / In Progress / Completed)	                           ✅
-> Filter tasks by status	                                                           ✅
-> Dashboard summary with counts & progress bar	                                     ✅
-> LocalStorage persistence (data stays after reload)	                               🔥
-> Fully responsive UI	                                                             🔥


🛠 Tech Stack :

| Technology                                         | Purpose                            |
| -------------------------------------------------- | ---------------------------------- |
| **React + TypeScript**                             | UI + component-based architecture  |
| **Vite**                                           | Fast dev server + build tool       |
| **Tailwind-style utility classes + CSS variables** | UI styling + theming               |
| **LocalStorage API**                               | Saves tasks even after page reload |
| **Figma Make → Code Export**                       | UI design source                   |



📂 Project Structure
Employee Task Tracker UI/
│── index.html
│── package.json
│── vite.config.ts
│── package-lock.json
│── README.md
└──node_modules/
    ├── .package-lock.json
    ...
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── Attributions.md
    ├── styles/
    │   └── globals.css
    └── components/
       ├── tracker/
       │   ├── Header.tsx
       │   ├── DashboardSummary.tsx
       │   ├── TaskFilters.tsx
       │   ├── EmployeeList.tsx
       │   ├── EmployeeCard.tsx
       │   ├── EmployeeStatsTable.tsx
       │   ├── AddEmployeeModal.tsx
       │   ├── AddTaskModal.tsx
       │   └── types.ts
       ├── ui/         
       └── figma/
            ├── ImageWithFallback.tsx
  


▶ How to Run the Project Locally

📌 Prerequisites

✔ Node.js Installed
✔ Command Prompt / PowerShell
✔ Internet (only for first-time install)


Step 1 - cd "C:\Users\bhara\Downloads\Employee Task Tracker UI" ( your directory of the file modify as you saved !! )
Step 2 - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Step 3 — Install dependencies
npm install

Step 4 — Start development server
npm run dev

Step 5 — Open the URL shown in terminal

Example:

http://localhost:3000/


Your full frontend UI will open in the browser.



| Assumption                                                     | Reason                                  |
| -------------------------------------------------------------- | --------------------------------------- |
| Tasks are stored locally and persistent using LocalStorage     | No backend required for demo submission |
| Users interact only through the UI (no authentication)         | Simplifies prototype for evaluation     |
| One employee can have multiple tasks                           | Realistic workplace scenario            |
| Status values limited to **Pending / In Progress / Completed** | Standard task pipeline flow             |
