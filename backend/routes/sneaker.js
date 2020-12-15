const Sneaker = require('../models/sneaker');
var cors  = require('cors');

var express = require('express');
var router = express.Router();



//GET
router.get('/',cors(),function(req, res, next) {
    Sneaker.find({}).then((sneakers)=>{
        console.log("DB에서 Get");
        res.status(200).json(sneakers);
    })
});

//Create
router.post('/',cors(),function(req, res, next) {

    const sneaker = new Sneaker({
        name: req.body.name,
        date: req.body.date,
        url: req.body.url,
        info : req.body.info,
        link : req.body.link,
        price : req.body.price
    });
    sneaker.save((err, sneaker) => {
        if(err){
            console.log(err);
            res.status(500).send({error:"에러"});
        }
        else{
            res.status(200).json(sneaker);

        }    });
});

// Delete
router.post('/:id', cors(),(req, res, next)=>{
    console.log("DB에서 delete");
    Sneaker.deleteOne({_id:req.params.id}, (err,sneaker)=>{
        res.status(200).json(sneaker);
    })
});



module.exports = router;