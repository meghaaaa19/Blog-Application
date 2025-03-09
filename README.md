# Blog-Application
Simple Express Blog Application
A lightweight blog application built with Express.js and EJS templating engine. This application allows users to create, read, update, and delete blog posts with a clean and responsive interface.
Features

Create new blog posts with title and content
View all posts on the homepage in a responsive grid layout
Edit existing posts
Delete posts
Mobile-friendly design using Bootstrap 5
Custom CSS with hover effects and gradients

Tech Stack

Backend: Node.js, Express.js
Frontend: EJS templates, Bootstrap 5
Data Storage: In-memory storage (array-based)
Styling: Custom CSS with Bootstrap extensions

Project Structure
Copysimple-express-blog/
├── index.js                # Main application entry point
├── package.json            # Project dependencies
├── public/                 # Static assets
│   └── style.css           # Custom CSS styles
└── views/                  # EJS templates
    ├── index.ejs           # Homepage showing all posts
    ├── new.ejs             # Form for creating new posts
    └── edit.ejs            # Form for editing existing posts
Installation

Clone this repository
Copygit clone https://github.com/yourusername/simple-express-blog.git
cd simple-express-blog

Install dependencies
Copynpm install

Create a package.json file if not present:
jsonCopy{
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

Start the application
Copynpm start

Visit http://localhost:3000 in your browser

Usage
Creating a Post

Click the "Create New Post" button on the homepage
Fill in the title and content fields
Click "Publish Post" to save your post

Editing a Post

Click the "Edit" button on any post card
Modify the title and/or content
Click "Update Post" to save your changes

Deleting a Post

Click the "Delete" button on any post card
The post will be immediately removed

Future Improvements

Add persistent storage using a database (MongoDB, MySQL, etc.)
Implement user authentication
Add image upload functionality
Add comment system
Implement categories and tags for posts
Add rich text editor for post content
Implement pagination for the post list

Author
megha 
