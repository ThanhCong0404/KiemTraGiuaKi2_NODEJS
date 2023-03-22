var express = require("express");
const Contact = require("../model/contact");
const ContactService = require("../services/contactServices");
var router = express.Router();

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
router.use(express.json());


router.post("/insert-contact", async function(req,res){
     var contactService = new ContactService();
     var contact = new Contact();
     contact.name = req.body.Name;
     contact.email = req.body.Email;
     contact.phoneNumber = req.body.PhoneNumber;
     contact.message = req.body.Message;

     var result = await contactService.insertContact(contact);
     res.json({status: true, message:""});
});

router.get("/contact-list", async function(req,res){
    var contactService = new ContactService();
    var contact = await contactService.getContactList();
    res.json(contact);
});

module.exports = router;