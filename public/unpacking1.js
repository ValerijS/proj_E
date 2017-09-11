const {sequelize, School, Pupil} = require('./db');

sequelize.sync({force:true})
.then(() => {
    const promises = [];
    for (let i = 0; i<10; i++) {
        promises.push(
            School.create({
                nameOrNumber: 45 + i,
                numberOfPupils: 12341 + i,
                averageScore: 9.5
            })
            .then((school) => {
                return Pupil.create({ 
                    firstName: 'John ' + i,
                    lastName: 'Doe' + i,
                    school: school.nameOrNumber,
                    averageScore: 9.57   
                }) 
            })
        )
    }
    return Promise.all(promises)
})