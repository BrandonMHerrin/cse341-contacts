const validateContact = (req, res, next) => {
    const { firstName, lastName, address, email, phone } = req.body;
    if (!firstName || !lastName || !email || !phone ) {
        return res.status(400).json({ message: 'Missing required fields: firstName, lastName, email, or phone' });
    }

    if (!address || !address.street1 || !address.street2 || !address.city || !address.state) {
        return res.status(400).json({ message: 'Missing required fields: address, street1, street2, city, or state.'});
    }

    next();
}

export default validateContact;