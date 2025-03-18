import express from 'express';
import ContactsController from '../controllers/contacts-controller.js';
import validateContact from '../middleware/validate-contact.js';
import validateContactUpdate from '../middleware/validate-contact-update.js';

const contactsRouter = express.Router();
const contactsController = new ContactsController();

contactsRouter.get('/contacts/:id', contactsController.get);
contactsRouter.get('/contacts/', contactsController.getAll);
contactsRouter.post('/contacts/', validateContact, contactsController.post);
contactsRouter.put('/contacts/:id', validateContactUpdate, contactsController.put);
contactsRouter.delete('/contacts/:id', contactsController.delete);

export default contactsRouter;