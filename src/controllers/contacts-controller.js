import { ObjectId } from "mongodb";
import NotFoundError from "../errors/notfound-error.js";
import ContactsService from "../services/contacts-service.js";


class ContactsController {
    #contactsService
    constructor() {
        this.#contactsService = new ContactsService();
        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    async get(req, res, next) {
        try {
            const {id} = req.params;
            if (!ObjectId.isValid(id)) {
                throw new NotFoundError('Invalid ID provided')
            }
            const contact = await this.#contactsService.get(new ObjectId(id));
            return res.status(200).json(contact);
        } catch (error) {
            next(error);
        }
    }
    async getAll(req,res, next) {
        try {
            const contacts = await this.#contactsService.getAll();
            res.status(200).json(contacts);
        } catch (error) {
            next(error);
        }
    }
}

export default ContactsController;