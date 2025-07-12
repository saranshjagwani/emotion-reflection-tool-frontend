
# Emotion Reflection Tool – Frontend

A mobile-first web application where users can reflect on their emotions by submitting short text inputs. The app analyzes user reflections via a FastAPI backend and returns a mock emotional interpretation along with a confidence score.

---

## 🚀 Live Demo

[Live Frontend (Netlify)](https://emotionreflectiontool.netlify.app)
[Live API (Render)](https://emotion-reflection-tool-backend-p3gl.onrender.com/analyze)

---

## 💻 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Client**: [Axios](https://axios-http.com/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (deployed separately)

---

## ✨ Features

- Real-time emotion analysis via text input
- Responsive and clean UI
- Confidence visualization bar
- Error & loading state handling
- Fully integrated with live FastAPI backend

---

## 📦 Folder Structure

```

emotion-reflection-tool-frontend/
├── components/
│   ├── EmotionForm.tsx
│   └── EmotionResult.tsx
├── pages/
│   └── index.tsx
├── public/
├── styles/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

````

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saranshjagwani/emotion-reflection-tool-frontend.git
cd emotion-reflection-tool-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔗 API Configuration

The app sends requests to this backend API:

```ts
https://emotion-reflection-tool-backend-p3gl.onrender.com
```

The endpoint accepts:

```json
POST /analyze
{
  "text": "Your reflection here"
}
```

And returns:

```json
{
  "emotion": "Calm",
  "confidence": 0.87
}
```

> This mock API is hosted using FastAPI on Render.

---

## 🎨 Styling with Tailwind CSS

Tailwind CSS is already configured. You can extend the config in `tailwind.config.ts` as needed.

To use Tailwind utility classes:

```tsx
<div className="p-4 bg-white rounded-lg shadow-md">
  Your content here
</div>
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🧠 Author

Built with 💡 by [Saransh Jagwani](https://github.com/saranshjagwani)

---

## 📜 License

This project is licensed under the MIT License.

````

---

## ✅ Next Step: Add It to GitHub

1. Save the file as `README.md` in your project root.
2. Commit and push:

```bash
git add README.md
git commit -m "Added professional README with setup instructions"
git push
````

---

Let me know if you'd like help writing a backend `README.md` or deploying this frontend on Vercel.
