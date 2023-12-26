/*this is the recipe controller that exports the tabs found at the top of the table*/

/*main page*/
exports.homepage = async(req, res) => {

    res.render('index', {title: 'CUR[RY]'});
}

/*recipe page*/
exports.Recipe = async(req, res) => {
    res.render('Recipe', {title: 'recipe'});
}

/*store page*/
exports.Store = async(req, res) =>{
    res.render('Store', {title: 'Store'});
}

/*comment/community session page*/
exports.submitComment = async(req, res) => {
    res.render('submit-comment', {title: 'CUR[RY] - Comments'});
}