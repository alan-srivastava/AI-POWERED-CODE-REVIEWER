# 🤖 AI-Powered Code Reviewer
# Screenshots <img width="1920" height="968" alt="image" src="https://github.com/user-attachments/assets/d6f4635b-f55a-469d-84e5-c962b3318df9" />
<img width="1920" height="962" alt="image" src="https://github.com/user-attachments/assets/80c34fb5-b2dc-49b6-b860-9eff0d6dbfdf" />


A full-stack web application that analyzes and reviews code using Google Generative AI (Gemini). This project enables users to input code and receive intelligent suggestions or feedback in real-time.

---

## 🚀 Live Links

- 🔗 **Frontend (Vercel):** [https://ai-powered-code-reviewer-jnof.vercel.app](https://ai-powered-code-reviewer-jnof.vercel.app)
- 🔗 **Backend (Render):** [https://ai-powered-code-reviewer-pro-43x5.onrender.com](https://ai-powered-code-reviewer-pro-43x5.onrender.com)


---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Vite
- Axios

### 🔹 Backend
- Node.js
- Express.js
- Google Generative AI (via `@google/generative-ai`)
- dotenv
- CORS

### 🔹 Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📁 Project Structure
AI-POWERED-CODE-REVIEWER/
├── Backend/

│ ├── Server.js

│ ├── package.json

│ └── .env

└── Frontend/

├── src/

│ └── App.jsx

├── package.json

└── vite.config.js


---

## 🧠 Features

- Paste code into the UI and receive a detailed review from Google Gemini
- Real-time feedback on code quality, structure, and logic
- Responsive UI with smooth UX
- Secure backend with environment variable support

---

## ⚙️ How to Run Locally

### 1 Clone the Repo

git clone https://github.com/alan-srivastava/AI-POWERED-CODE-REVIEWER.git
cd AI-POWERED-CODE-REVIEWER

2 Backend Setup

cd Backend

npm install

node Server.js

3 Frontend Setup

cd ../Frontend

npm install

npm run dev

🔐 Environment Variables (Backend)
Create a .env file in /Backend with the following:

GOOGLE_API_KEY=your_google_generative_ai_key

📦 API Endpoint

POST: /ai/get-review

✨ Author

Alankrit Srivastava
