# 🔗 URL Shortener

A sleek, lightweight, and modern URL shortener built with Node.js and Tailwind CSS. Transform long, cumbersome URLs into short, shareable links with ease.

![URL Shortener Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-v14%2B-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC)

## ✨ Features

- **Custom Short Codes**: Personalize your links with your own custom slugs.
- **Random Code Generation**: Automatically generates unique short codes if none are provided.
- **Glassmorphism UI**: Beautiful, responsive design with smooth animations and a premium dark mode aesthetic.
- **Instant Copy**: Quick-copy functionality for easy sharing.
- **Link History**: View all your shortened links in a clean list format.
- **Persistent Storage**: Saves your links to a local JSON file, ensuring they persist across server restarts.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

1. **Start the server:**
   ```bash
   node app.js
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## 🛠️ Tech Stack

- **Backend**: Pure Node.js (No heavy frameworks like Express)
- **Frontend**: HTML5, JavaScript (ES6+), CSS3
- **Styling**: Tailwind CSS (via CDN for simplicity)
- **Database**: Local JSON file system (simple and effective)

## 📁 Project Structure

```text
.
├── data/               # Persistent storage for links
│   └── links.json      # JSON data file
├── public/             # Frontend assets
│   └── index.html      # Main user interface
├── app.js             # Core backend logic
├── package.json        # Dependencies and metadata
└── README.md           # Project documentation
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Ankit
