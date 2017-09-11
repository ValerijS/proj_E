 module.exports =function (req, res) { 
       const pug = require('pug');  
       var table = 'School';       
       const School = require('C:/nodeJs/todoListApi/db').School;
       const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;
       Pupil.destroy({
               where: {
                 school: req.query.name
               }
            })         
        .then(()=>{
            School.destroy({
           where: {
             id: req.query.name
           }
        })        
        })                                  
        .then(()=>res.end())
}