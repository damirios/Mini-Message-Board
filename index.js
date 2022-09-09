const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('css'));


app.set('view engine', 'hbs');
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
