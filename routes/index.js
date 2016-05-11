var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Question List page. */
router.get('/questionlist', function(req, res) {
    var db = req.db;
    var collection = db.get('questioncollection');
    collection.find({},{},function(e,docs){
        res.render('questionlist', {
            "qlist" : docs
        });
    });
});
/* GET New Question page. */
router.get('/newquestion', function(req, res) {
    res.render('newquestion', { title: 'Add New Question' });
});
/* POST to Add Question Service */
router.post('/addquestion', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var question = req.body.question;
    var name = req.body.name;

    // Set our collection
    var collection = db.get('questioncollection');

    // Submit to the DB
    collection.insert({
        "question" : question,
        "name" : name

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("questionlist");
        }
    });
});
module.exports = router;
