import { MongoClient } from 'mongodb';
import config from '../config.js'
import DatabaseError from '../errors/database-error.js'
const {url, dbName} = config.mongo;
let collection;

const getCollection = async () => {
    if (collection) return collection;
    const client = await MongoClient.connect(url);
    collection = client.db(dbName).collection('contacts');
    console.log('Database connected');
    return collection;
}

class ContactsModel {
    constructor() {}
    async find(id) {
        try {
            const collection = await getCollection();
            return collection.findOne({_id: id});
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async findAll() {
        try {
            const collection = await getCollection();
            return collection.find().toArray();
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
}

export default ContactsModel;