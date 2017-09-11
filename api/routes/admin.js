var express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var requireTree              = require('require-tree');
var controllers              = requireTree('C:/nodeJs/todoListApi/api/controllers');
var router = express.Router();
const mustAuthenticatedMw = require('C:/nodeJs/todoListApi/mustAuthenticatedMw');

//router.all('/admin',mustAuthenticatedMw) 
//  router.get('/admin',controllers.admin_schools, controllers.render('views/tiles_25_08_17.pug'))
//  router.post('/admin',controllers.pupils_of_school, controllers.render('views/Pupil_tabl_input.pug'));
router.route('/admin')
  .all(mustAuthenticatedMw) 
  .get(controllers.admin_schools, controllers.render('views/boots_tiles_03_09.pug'))
  .post(controllers.pupils_of_school, controllers.render('views/Pupil_tabl_input_01_09.pug'));
router.post('/updata_pupils', urlencodedParser, controllers.update_pupil_1, controllers.render('views/Pupil_tabl_input_01_09.pug'));
router.get('/updata_school', controllers.update_school_1, controllers.render('views/school.pug'))
router.post('/login',controllers.login_28_08);
//router.get('/register',function (req,res){res.send(pug.renderFile('views/register.pug'))})
//router.post('/register',controllers.register)
router.route('/register')
  .get(function (req,res){res.send(pug.renderFile('views/register.pug'))})
  .post(controllers.register)
module.exports = router;