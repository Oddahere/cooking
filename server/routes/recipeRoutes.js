/*this is the router.get js where it can connect to app.js*/

const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

/*home page*/
router.get('/', recipeController.homepage);
/*recipe page*/
router.get('/recipe', recipeController.Recipe);
/*store page*/
router.get('/Store', recipeController.Store)
/*comment/community page*/
router.get('/submit-comment', recipeController.submitComment);





/*export out*/
module.exports = router;