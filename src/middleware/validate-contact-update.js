const validateContactUpdate = (req, res, next) => {
  const { firstName, lastName, address, email, phone } = req.body;

  if (
    firstName === undefined &&
    lastName === undefined &&
    address === undefined &&
    email === undefined &&
    phone === undefined
  ) {
    return res
      .status(400)
      .json({ message: "At least one field must be provided to update." });
  }

  if (address) {
    if (
      !address.street1 ||
      !address.street2 ||
      !address.city ||
      !address.state
    ) {
      res.status(400).json({
        message:
          "When updating the address, all fields must be provided: street1, street2, city, state.",
      });
    }
  }

  next();
};

export default validateContactUpdate;