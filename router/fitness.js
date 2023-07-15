const express = require('express');
const ejercicios = require('../models/fitness.js');
const router = express.Router();
const path = require('path');
const { unlink } = require('fs-extra');


    router.get('/',async(req,res)=>{
        try{
            
            const todoejercicios = await ejercicios.find();

            res.render("index",{
                arrayejercicios:todoejercicios
            });

        }catch(error){

            console.log(error)
        }
    });

    router.get('/ingresar',(req,res)=>{
        res.render("ingresar");
    });

    router.post('/ingresar',async(req,res)=>{

        const body = req.body;
        const file = req.file;

        try{

            const newejercicio = new ejercicios({
                id: body.id,
                nombre: body.nombre,
                descripcion: body.descripcion,
                link: body.link,
                filename: file.filename,
                path: '/uploads/' + file.filename,
                originalname: file.originalname,
                mimetype: file.mimetype,
                size: file.size
            });

            newejercicio.save();
            res.redirect(`ingresar`);
        }catch(error){
            console.log('error', error)
        }
    });

module.exports = router;