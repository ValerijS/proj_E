module.exports =function (req, res) {
       //alert('asd');
       console.log(req.params.id);
       const pug = require('pug');  
       var table = 'School';       
       const School = require('C:/nodeJs/todoListApi/db').School;
       const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;
       Pupil.destroy({
               where: {
                 school: req.params.id
               }
            })         
        .then(()=>{
            School.destroy({
           where: {
             id: req.params.id
           }
        })        
        })                                  
        .then(()=>res.end())
}