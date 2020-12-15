var express = require('express');
var router = express.Router();
var cors  = require('cors');
const Sneaker = require('../models/sneaker');


// HOME
router.get('/', cors(),(req, res, next)=>{
  Sneaker.find({}).then( (sneakers)=>{
    console.log("메인페이지 랜더링");
    console.log(sneakers);

    res.render('index', {sneakers : sneakers});
  }).catch((err)=>{
    console.log(err);
  });
});

//newsneaker
router.get('/newsneaker', cors(),function (req, res, next) {
  // console.log("newmovie 랜더링\n");
  res.render('newsneaker');
});

//ADMIN
router.get('/admin', cors(),(req, res, next)=>{
  Sneaker.find({}).then( (sneakers)=>{
     console.log("Admin 페이지 랜더링\n");
    res.render('admin', {sneakers : sneakers});
  }).catch((err)=>{
    console.log(err);
  });
});



module.exports = router;
