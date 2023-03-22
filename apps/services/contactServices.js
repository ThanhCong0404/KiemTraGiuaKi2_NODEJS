const { use } = require('../controllers');
var config = require("./../../config/setting.json");

const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class ContactService{
    databaseConnection = require('./../database/database');
    contact = require('./../model/contact');
    client;
    contactDatabase;
    contactCollection;
    constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.contactDatabase = this.client.db(config.mongodb.database);
        this.contactCollection = this.contactDatabase.collection("contact");
    }

//     async deleteProduct(id){
//     return await this.productCollection.deleteOne({"_id": new ObjectId(id)
// });
//     }
//     async updateProduct(product){
//     return await this.productCollection.updateOne({"_id": new
// ObjectId(product._id) }, {$set: product});
//     }
    async insertContact(contact){
        return await this.contactCollection.insertOne(contact);
    }
//     async getProduct(id){
//     return await this.productCollection.findOne({"_id": new ObjectId(id)
// },{});
//     }
    async getContactList() {
        const cursor = await this.contactCollection.find({},{}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = ContactService;