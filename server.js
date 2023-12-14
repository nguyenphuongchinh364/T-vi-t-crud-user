const express = require('express');
const app = express();
const db = require('./db')
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; font-src https://fonts.gstatic.com");
    next();
});

app.use('/', bookRoutes);
app.use('/signup', userRoutes)

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});