const express = require('express')

const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose')

server.use(cors());
const server = express();
const server = (express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cocotail', { useNewUrlParser: true, useUnifiedTopology: true });

const cocoktailSchema = new mongoose.Schema({
    name: String
});


//Modal
const cocoktailModal = mongoose.model('cocotail', cocoktailSchema);
// a server endpoint 

server.get('/', (req, res) => {
    res.status(200).send('Home Route')
})

//to get data from api

sever.get('/getDatafromAPI', (req, res) => {
    const Url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    axios.get(Url)
        .then(reslut => {
            console.log(reslut.data)
            res.status(200).send(reslut.drinks.data)
        })
})

//to add data we use post methos

server.post('/addToFav', (req, res) => {
    const { strDrink, strDrinkThumb } = req.body
    const newObj = new cocoktailModal(
        {
            strDrink: strDrink,
            strDrinkThumb: strDrinkThumb,
        }
    )
    newObj.save();


})

//to get data from DB
server.get('/getDatafromDB', (req, res) => {
    cocoktailModal.find({}, (err, drinksData) => {
        if (err) {
            console.log("try again ", err)
        } else {
            console.log(drinksData);
            res.status(200).send(drinksData)
        }
    })


})

// delete post
server.delete('/delete': id, (req, res) = {
    const { id } = req.params
    cocoktailModal.findOneAndRemove({ idDrink: id }, (err, drinksData) => {

        if (err) {
            console.log("try again please", err)
        } else {
            console.log(drinksData);
            res.status(200).send(drinksData)
        }
    })


})




//Update post

server.put('/update',(req,res)=>{
    const { strDrink, strDrinkThumb } = req.body
    cocoktailModal.findOne({ idDrink: id }(err, drinksData) => {
        if (err) {
            console.log("try again please..again", err)
        } else {
            drinksData.strDrink=strDrink
            drinksData.strDrink=strDrink
            drinksData.save();
            .then()=>{
                cocoktailModal.find({},(err,drinksData)=>{
                    if (err) {
                        console.log("try again please", err)
                    } else {

                        res.status(200).send(drinksData)

                })
                
            }

})


server.listen(PORT,=> {
    console.log(`working on server,${PORT}`)
})











