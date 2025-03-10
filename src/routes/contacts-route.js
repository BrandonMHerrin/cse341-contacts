import express from 'express';
import ContactsController from '../controllers/contacts-controller.js';

const contactsRouter = express.Router();
const contactsController = new ContactsController();

contactsRouter.get('/contacts/:id', contactsController.get);
contactsRouter.get('/contacts/', contactsController.getAll)

export default contactsRouter;