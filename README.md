# OmniBOTix

**Live Demo:** [https://omni-bo-tix-7uzg.vercel.app/](https://omni-bo-tix-7uzg.vercel.app/)

**OmniBOTix** is a cyberpunk-inspired AI marketplace and automation platform. Discover, deploy, and build cutting-edge AI agents—including the exclusive, terrifying Digital Clone Agent. Designed for modern businesses and tech enthusiasts, OmniBOTix offers a sleek, futuristic UI and a robust, extensible architecture.

---

## 🚀 Features
- **AI Agent Marketplace:** Browse, search, and filter a vast library of AI agents for every need.
- **Digital Clone Agent:** Create a digital twin of yourself—powerful, productive, and a little bit scary.
- **Custom Build Service:** Design and deploy bespoke AI solutions with an intuitive builder.
- **Cyberpunk UI/UX:** Neon, gradients, and grid effects for a truly immersive experience.
- **Responsive & Fast:** Built with Vite, React, and Tailwind CSS for top performance.

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite + TypeScript + Tailwind CSS
- **UI Components:** shadcn/ui, Lucide Icons
- **State & Data:** React Query, React Router
- **Backend:** (Pluggable, not included by default—connect your own API)

---

## 📦 Project Structure
```
OmniBotix/
  frontend/         # All frontend code (React, Vite, Tailwind)
    public/         # Static assets (favicon, images)
    src/            # Source code (components, pages, hooks, etc.)
  backend/          # (Optional) Your backend API here
```

---

## 🖥️ Local Development
1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
3. **Open:** [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment
- **Frontend:** Deploy the `frontend/` folder to Vercel, Netlify, or any static host.
- **Backend:** Deploy your API separately (Node.js, Python, etc.), and set the API URL in your frontend’s environment variables (e.g., `VITE_API_URL`).

---

## ⚡ Customization
- **Change the logo:** Replace `frontend/public/favicon.ico` and update `index.html`.
- **Edit the Digital Clone Agent:** See `frontend/src/pages/Agents.tsx` for agent data.
- **Add your backend:** Connect your API endpoints and update fetch calls in the frontend.

---

## 🕶️ Credits
- UI inspired by cyberpunk and shadcn/ui
- Icons by [Lucide](https://lucide.dev/)
- Built with ❤️ by [Your Name/Team]

---

## 📄 License
MIT 