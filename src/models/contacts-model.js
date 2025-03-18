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
    async insert(contact) {
        try {
            const collection = await getCollection();
            const result = await collection.insertOne(contact);
            if (!result.insertedId) {
                throw new DatabaseError('There was an error creating the contact.')
            }
            return result.insertedId;
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async update(id, update) {
        try {
            const collection = await getCollection();
            const result = await collection.updateOne({_id: id}, { $set: update});
            if (result.matchedCount === 0) {
                throw new DatabaseError('No contact found with the provided Id.')
            }
            return;
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
    async delete(id) {
        try {
            const collection = await getCollection();
            const result = await collection.deleteOne({_id: id});
            if (result.deletedCount !== 1) {
                throw new DatabaseError('Failed to delete the contact.');
            }
            return;
        } catch (error) {
            throw new DatabaseError(error.message);
        }
    }
}

export default ContactsModel;