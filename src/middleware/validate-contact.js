const validateContact = (req, res, next) => {
    const { firstName, lastName, email, favoriteColor, birthDate } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthDate) {
        return res.status(400).json({ message: 'Missing required fields: firstName, lastName, email, favoriteColor, or birthDate' });
    }

    next();
}

export default validateContact;