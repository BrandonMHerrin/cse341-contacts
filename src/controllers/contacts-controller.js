import { ObjectId } from "mongodb";
import NotFoundError from "../errors/notfound-error.js";
import ContactsService from "../services/contacts-service.js";


class ContactsController {
    #contactsService
    constructor() {
        this.#contactsService = new ContactsService();
        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.delete = this.delete.bind(this);
    }
    async get(req, res, next) {
        try {
            const {id} = req.params;
            if (!ObjectId.isValid(id)) {
                throw new NotFoundError('Invalid ID provided');
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
    async post(req, res, next) {
        try {
            const contactId = await this.#contactsService.post(req.body);
            res.status(201).json(contactId);
        } catch (error) {
            next(error);
        }
    }
    async put(req, res, next) {
        try {
            const {id} = req.params;
            const update = req.body;
            if (!ObjectId.isValid(id)) {
                throw new NotFoundError("Invalid ID provided");
            }
            await this.#contactsService.put(new ObjectId(id), update);
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const {id} = req.params;
            if (!ObjectId.isValid(id)) {
                throw new NotFoundError('Invalid ID provided');
            }
            await this.#contactsService.delete(new ObjectId(id));
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

export default ContactsController;