// Import dependencies
import express from 'express'
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Temporary storage for blog posts
let posts = [];

// Routes

// Home - Show all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Show form to create a new post
app.get('/new', (req, res) => {
    res.render('new');
});

// Handle new post submission
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: Date.now().toString(), title, content });
    res.redirect('/');
});

// Show edit form
app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('edit', { post });
});

// Handle post update
app.post('/update/:id', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        post.title = title;
        post.content = content;
    }
    res.redirect('/');
});

// Handle post deletion
app.post('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
