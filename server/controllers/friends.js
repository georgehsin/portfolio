console.log('friends controller');

var mongoose = require('mongoose')
var Friend = mongoose.model('Friends');

function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('friend was created')
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      }else{
        friend.name = req.body.name;
        friend.favoriteLanguage = req.body.favoriteLanguage;
        friend.save(function(err, updatedFriend){
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    //your code here
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, result){

      res.json(result);
    })
  };
}
module.exports = new FriendsController(); // what does this export?