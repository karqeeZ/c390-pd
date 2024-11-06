const express = require('express');
const path = require('path');
const data = require('./data'); 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route handlers
app.get('/', (req, res) => {
    res.render('index', { index: data.index });
});

app.get('/projects', (req, res) => {
    res.render('project', {projects: data.project})
});

// app.get('/projects/:id', (req, res) => {
//     res.render('projectDetails', {projects: data.project})
// });

app.get('/projects/:id', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = data.project.find(p => p.id === projectId); // Find the specific project by ID
    if (project) {
        res.render('projectDetails', { project }); // Pass the single project to the view
    } else {
        res.status(404).send('Project not found');
    }
});

app.get('/contact', (req, res) => {
    res.render('contact', { contact: data.contact });
});

app.get('/about', (req, res) => {
    res.render('about', { me: data.about });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
