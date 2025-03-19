const validateContactUpdate = (req, res, next) => {
  const { firstName, lastName, email, favoriteColor, birthDate } = req.body;

  if (
    firstName === undefined &&
    lastName === undefined &&
    email === undefined &&
    favoriteColor === undefined &&
    birthDate === undefined
  ) {
    return res
      .status(400)
      .json({ message: "At least one field must be provided to update." });
  }

  next();
};

export default validateContactUpdate;