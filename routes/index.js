var express = require('express');
var router = express.Router();

var myArray = [
{ id:1, value:true},
{ id:2, value:false},
{ id:3, value:false},
{ id:4, value:false},
{ id:5, value:false},
{ id:6, value:false},
{ id:7, value:false},
{ id:8, value:false},
{ id:9, value:false}
];


router.get('/', function(req, res, next) {

  function shuffle(arra1) {
      var ctr = arra1.length, temp, index;
  // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }
    shuffle(myArray);
  res.render('index', { myArray });
});


module.exports = router;
