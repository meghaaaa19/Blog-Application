# Simple Express Blog Application

A lightweight blog application built with **Express.js** and **EJS** templating engine. This application allows users to create, read, update, and delete blog posts with a clean and responsive interface.

## Features

- Create new blog posts with a title and content
- View all posts on the homepage in a responsive grid layout
- Edit existing posts
- Delete posts
- Mobile-friendly design using **Bootstrap 5**
- Custom CSS with hover effects and gradients

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS templates, Bootstrap 5  
- **Data Storage:** In-memory storage (array-based)  
- **Styling:** Custom CSS with Bootstrap extensions

## Project Structure
```
express-blog-app/
├── index.js          # Main application entry point
├── package.json      # Project dependencies
├── public/           # Static assets
│   └── style.css     # Custom CSS styles
└── views/            # EJS templates
    ├── index.ejs     # Homepage showing all posts
    ├── new.ejs       # Form for creating new posts
    └── edit.ejs      # Form for editing existing posts
```

## Installation

### 1. Clone this repository
```sh
git clone https://github.com/yourusername/simple-express-blog.git
cd simple-express-blog
```

### 2. Install dependencies
```sh
npm install
```

### 3. Create a `package.json` file (if not present)
```json
{
  "name": "simple-express-blog",
  "version": "1.0.0",
  "description": "A simple blog application built with Express and EJS",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 4. Start the application
```sh
npm start
```

### 5. Open in browser
Visit: [http://localhost:3000](http://localhost:3000)

## Usage

### Creating a Post
1. Click the **"Create New Post"** button on the homepage
2. Fill in the **title** and **content** fields
3. Click **"Publish Post"** to save your post

### Editing a Post
1. Click the **"Edit"** button on any post card
2. Modify the **title** and/or **content**
3. Click **"Update Post"** to save your changes

### Deleting a Post
1. Click the **"Delete"** button on any post card
2. The post will be immediately removed

## Future Improvements

- Add persistent storage using a database (**MongoDB, MySQL, etc.**)
- Implement user authentication
- Add image upload functionality
- Add a comment system
- Implement categories and tags for posts
- Add a rich text editor for post content
- Implement pagination for the post list

## Author
**Megha**

