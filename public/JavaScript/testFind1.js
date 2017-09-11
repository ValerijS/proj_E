alert('Here');
const School = require('./db').School;
School.find({
    where: {
        nameOrNumber: 45
    }
})
.then((school) => {
    //document.getElementById("demo").innerHTML = "Hello World!";
    console.log(school.get());
})
/*where: {
        nameOrNumber: >45
    }*/
/*
School
.findAndCountAll({
   where: {
      nameOrNumber: {
          gt: 45
      }
   }
})
.then(result => {
  console.log(result.count);
  console.log(result.rows);
});*/
/* offset: 10,
   limit: 2*/