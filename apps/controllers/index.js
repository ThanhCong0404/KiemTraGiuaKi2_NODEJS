var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/contactAPI", require(__dirname + "/contactController"));

router.use("/admin", require(__dirname + "/admincontroller"));
router.get("/", function(req,res){
    res.render("index");
});
router.get("/contact", function(req,res){
    res.render("contact");
});


module.exports = router;
