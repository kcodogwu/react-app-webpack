'use strict';

// load modules
import express from 'express';
import expressHandlebars from 'express-handlebars';

// app setup
const app = express();
const handlebars = expressHandlebars.create();

app.set('port', process.env.PORT || 3333);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.type('text/plain')
        .status(404)
        .send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.type('text/plain')
        .status(500)
        .send('500 - Server error');
});

export default app;