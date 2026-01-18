# Intra SUST Programming Contest - 2026 🏆

![License](https://img.shields.io/badge/License-ISC-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.0-339933?logo=node.js&logoColor=white)

Welcome to the official repository for the **Intra SUST Programming Contest 2026** website. This platform serves as the central hub for the annual competitive programming contest organized for students of **Shahjalal University of Science and Technology (SUST)**.

🔗 **Live Website:** [https://intrasust.vercel.app/](https://intrasust.vercel.app/)

## 📖 About

The Intra SUST Programming Contest is an annual event designed to challenge students with a diverse set of engaging and thought-provoking problems. Open to participants from every department, this contest fosters problem-solving skills, logical thinking, and a passion for competitive programming.

This repository bridges the gap between participants and the contest administration, offering a seamless experience for registration, information dissemination, and live updates.

## ✨ Features

- **🏆 Contest Information:** Detailed breakdown of the contest schedule, format, and rules.
- **📝 Seamless Registration:** User-friendly registration form for teams and individuals.
- **💰 Prize Pool:** Showcase of awards and recognition for top performers.
- **📅 Schedule:** Interactive timeline of contest events.
- **🤝 Sponsors Showcase:** Dedicated section highlighting our valuable sponsors.
- **🎨 Modern UI/UX:** A visually stunning interface built with **React**, **Tailwind CSS**, and **Framer Motion** for smooth animations.
- **📊 Real-time Data:** Backend integration with **Google Sheets** for easy content management by admins.

## 🛠️ Tech Stack

### Client
- **Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router](https://reactrouter.com/)

### Server
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Database/CMS:** Google Sheets (via `google-spreadsheet` & `google-auth-library`)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/intra-sust-contest.git
   cd intra-sust-contest
   ```

2. **Install Dependencies**
   You can install dependencies for both client and server using the convenience script:
   ```bash
   npm run install-all
   ```
   Or install them manually:
   ```bash
   # Root dependencies
   npm install

   # Client dependencies
   cd client
   npm install

   # Server dependencies
   cd ../server
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `server` directory and configure your Google Sheets API credentials.
   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_email
   GOOGLE_PRIVATE_KEY=your_key
   SPREADSHEET_ID=your_spreadsheet_id
   ```

### Running the Project

To start both the client and server concurrently:

```bash
npm start
```

- **Client:** Runs on `http://localhost:5173`
- **Server:** Runs on `http://localhost:3000` (or your configured port)

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

Developed with ❤️ by the **SUST CSE Society** (or your team name).
