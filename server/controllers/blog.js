var mongoose = require('mongoose')
var Blog = mongoose.model('Blog');

module.exports = {
  index: function(req,res){
    Blog.find().sort({'_id':-1})
    .then((result)=>{
      res.json(result)
    })
    .catch((err)=>{
      console.log(err)
    });
  },
  create: function(req,res){
    Blog.create(req.body)
    .then((result)=>{
        console.log('blog post successful')
        res.json(result)
    })
    .catch((err)=>{
      console.log(err)
    });
  },
  update: function(req,res){
    Blog.findById(req.params.id)
    .then((blog)=>{
      blog.title = req.body.title;
      blog.post = req.body.post;
      blog.save()
    })
    .then((updatedPost)=>{
      res.json(updatedPost);
    })
    .catch((err)=>{
      console.log(err)
    });
  },
  show: function(req,res){
    Blog.findOne(req.params.id)
    .then((result)=>{
      res.json(result);
    });
  },
  delete: function(req,res){
    Blog.remove(req.params.id)
    .then(()=>{
      res.json({message: "Blog post removed!"});
    })
    .catch((err)=>{
      console.log(err)
    });
  }
}
//   create: function(req,res){
//     Blog.create(req.body, function(err, result){
//       if(err){
//         console.log(err)
//       }else{
//         console.log('blog post successful')
//         res.json(result)
//       }
//     });
//   },
//   update: function(req,res){
//     Blog.findById({_id: req.params.id}, function(err, blog){
//       if(err){
//         console.log(err);
//       }else{
//         blog.title = req.body.title;
//         blog.post = req.body.post;
//         blog.save(function(err, updatedPost){
//           if (err){
//             console.log(err);
//           }else{
//             res.json(updatedPost);
//           }
//         });
//       }
//     });
//   },
//   show: function(req,res){
//     Blog.findOne({_id: req.params.id}, function(err, result){

//       res.json(result);
//     });
//   },
//   delete: function(req,res){
//     Blog.remove({_id: req.params.id}, function(err){
//       if(err){
//         console.log(err);
//       }else{
//         res.json({message: "Blog post removed!"});
//       }
//     });
//   }
// }
