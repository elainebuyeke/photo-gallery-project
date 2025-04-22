## Photo Gallery App

A sleek, responsive React application for browsing and searching high-quality images via the Unsplash API.

**Live Demo:** https://photo-gallery-project-tau.vercel.app
**GitHub Repo:** https://github.com/elainebuyeke/photo-gallery-project


## Features

- Search photos from Unsplash in real-time
- Responsive photo grid layout
- Loader animation during fetch
- Multi-page layout with React Router (`Home` & `About`)
- Reusable components (SearchBar, PhotoCard, etc.)

---

## Tech Stack

- React
- React Router DOM
- CSS for styling
- Unsplash API
- Vercel (for deployment)
- Webpack

---

## Getting Started

1. **Clone the repository**
   git clone https://github.com/elainebuyeke/photo-gallery-project.git
   cd photo-gallery-project
2. **Install dependencies**
    npm install
3. **Start the app locally**
     npm start
4. **Open in browser**
    http://localhost:3000

## Unsplash API Setup
This project uses the Unsplash API to fetch images.
Create an account at Unsplash Developer
Generate an access key
In Home.jsx, replace the placeholder with your key:

    const ACCESS_KEY = "your_unsplash_access_key_here";

## Folder Structure
src/
├── components/
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── PhotoCard.jsx
│   ├── PhotoGrid.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── App.jsx
└── index.js

## Contributors
Built with collaboration and love
Elaine Omwenga
Stacey Jepchumba
Lewis Njuma
Billadams Nyamweno

Enjoy exploring beautiful images!

