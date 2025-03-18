import ContactsModel from "../models/contacts-model.js";
import NotFoundError from '../errors/notfound-error.js';
import ServiceError from '../errors/service-error.js'

class ContactsService {
    #contactsModel;
    constructor() {
        this.#contactsModel = new ContactsModel();
    }

    async getAll() {
        try {
            const contacts = await this.#contactsModel.findAll();
            if (!contacts || contacts.length === 0) {
                throw new NotFoundError('No contacts found');
            }
            return contacts;
        } catch (error) {
            throw new ServiceError(error.message);
        }
    }

    async get(id) {
        try {
            const contact = await this.#contactsModel.find(id);
            if(!contact) {
                throw new NotFoundError('Contact not found');
            }
            return contact;
        } catch (error) {
            throw new ServiceError(error.message);
        }
    }

    async post(contact) {
        try {
            const contactId = await this.#contactsModel.insert(contact);
            return { _id: contactId};
        } catch (error) {
            throw new ServiceError(error.message);
        }
    }

    async put(id, update) {
        try {
            await this.#contactsModel.update(id, update);
            return;
        } catch (error) {
            throw new ServiceError(error.message);
        }
    }

    async delete(id) {
        try {
            await this.#contactsModel.delete(id);
            return;
        } catch (error) {
            throw new ServiceError(error.message);
        }
    }
}

export default ContactsService;