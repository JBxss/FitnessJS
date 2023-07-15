const mongoose = require('mongoose'); //instalado
const express = require('express'); //instalado
require('dotenv').config()//configurando dotenv
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { format } = require('timeago.js');

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //para json

const uri = `mongodb+srv://${process.env.user}:${process.env.password}
@node.vrslbjn.mongodb.net/${process.env.nombredb}?retryWrites=true&w=majority`; 
mongoose.connect(uri)
.then(() => console.log('Conectado a la base de datos'))

app.listen(port,()=>{
    console.log('Servidor puerto',port); 
})

app.set('view engine','ejs'); //motores de plantilla jes 

app.set('views', path.join(__dirname, 'views')); //le decimos plantilla en viewsfvcccccccccc34dddddddd

app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));

app.use((req, res, next) => {
    app.locals.format = format;
    next();
});

//rutas web de la API
app.use('/', require('./router/fitness.js'));

app.use((req, res, next) => { //middleware pagina no existente
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Esta pagina no existe"
    });
})