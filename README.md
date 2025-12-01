🚀 Employee Task Tracker – Frontend Application

A modern, responsive web application built using React + TypeScript + Vite, designed to manage employees and their work tasks efficiently.
The UI is designed in Figma Make, converted into a full frontend project, and enhanced with task filtering, status updates, employee management, and LocalStorage persistence.

📌 Features :
| Feature                                                | Status |
| ------------------------------------------------------ | ------ |
| View employees & assigned tasks                        | ✅      |
| Add new task to any employee                           | ✅      |
| Add new employee (enhancement)                         | ✅      |
| Change task status (Pending / In Progress / Completed) | ✅      |
| Task filtering by status                               | ✅      |
| Dashboard summary with totals & progress bar           | ✅      |
| LocalStorage saved data even after refresh             | 🔥     |
| Fully responsive UI                                    | 🔥     |



🛠 Tech Stack :

| Technology                                         | Purpose                            |
| -------------------------------------------------- | ---------------------------------- |
| **React + TypeScript**                             | UI + component-based architecture  |
| **Vite**                                           | Fast dev server + build tool       |
| **Tailwind-style utility classes + CSS variables** | UI styling + theming               |
| **LocalStorage API**                               | Saves tasks even after page reload |
| **Figma Make → Code Export**                       | UI design source                   |



📂 Project Structure

<img width="314" height="588" alt="image" src="https://github.com/user-attachments/assets/12081509-8b96-4e7e-9843-279f52309d9f" />



▶ How to Run the Project Locally

📌 Prerequisites

✔ Node.js Installed

✔ Command Prompt / PowerShell

✔ Internet (only for first-time install)


Step 1 - Install the folder from the above repo !!!

Step 2 - Unzip the zipped folder in files explorer !

Step 3 - Open Terminal

Step 4 - Change the directory to where package.json file is located

cd "C:\Users\bhara\Downloads\Employee Task Tracker UI" ( change to your directory of the file modify as you saved where package.json is located !! )

Step 5 - Run in terminal :

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Step 6 — Install dependencies in terminal

npm install

Step 7 — Start development server in terminal

npm run dev

Step 8 — Open the URL shown in terminal

Example:

http://localhost:3000/


Your full frontend UI will open in the browser.



| Assumption                                                     | Reason                                  |
| -------------------------------------------------------------- | --------------------------------------- |
| Tasks are stored locally and persistent using LocalStorage     | No backend required for demo submission |
| Users interact only through the UI (no authentication)         | Simplifies prototype for evaluation     |
| One employee can have multiple tasks                           | Realistic workplace scenario            |
| Status values limited to **Pending / In Progress / Completed** | Standard task pipeline flow             |




output :
<img width="802" height="909" alt="image" src="https://github.com/user-attachments/assets/171c962c-42ca-4781-a250-ea156cd64121" />


Video description on how to install and run the website :

https://drive.google.com/file/d/1gyR-y3rcp2z2uFz3uASmaKDCDyhSGDu0/view
