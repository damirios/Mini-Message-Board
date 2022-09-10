const Router = require('express');
const prettyDate = require('../help-functions/prettyDate');

const router = new Router();

const messages = [
    {
        text: 'Hello!',
        user: 'Irina',
        added: prettyDate(new Date()),
    },
    {
        text: 'Hello there!',
        user: 'Damir',
        added: prettyDate(new Date()),
    }
];

router.get('/', (req, res) => {
    res.render('main', {title: 'Mini Messageboard', messages: messages});
});

router.get('/new', (req, res) => {
    res.render('form', {title: 'Adding a new message'});
});

router.post('/new', (req, res) => {
    const {userMessage, userName} = req.body;
    messages.push({text: userMessage, user: userName, added: prettyDate(new Date())});
    res.redirect('/');
});

module.exports = router;