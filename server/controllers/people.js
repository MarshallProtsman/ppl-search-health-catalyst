const Person = require("../models").Person;

module.exports = {
  create(req, res) {
    return Person.create({
      name: req.body.name,
      address: req.body.address,
      age: req.body.age,
      interests: req.body.interests,
      avatar: req.body.avatar,
    })
      .then((person) => res.status(201).send(person))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Person.findAll()
      .then((people) => res.status(200).send(people))
      .catch((error) => res.status(400).send(error));
  },
};