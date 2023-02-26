const jwt = require("jsonwebtoken");

const User = require("../Models/User");
const bcrypt = require("bcrypt");

exports.addUser = (req, res) => {
  const { email, password, name, surname } = req.body.data;
  if (!email || !password || !name || !surname) {
    return res.status(400).json({ message: "BOŞ ALAN BIRAKMAYINIZ" });
  }
  User.findOne({ where: { email } })
    .then((r) => {
      if (r) {
        return res.status(400).json("KAYITLI KULLANICI");
      } else {
        return bcrypt
          .hash(password, 12)
          .then((r) =>
            User.create({ email, password: r, name, surname })
              .then((r) =>
                res.status(200).json({ message: "KAYIT OLUSTURULDU" })
              )
              .catch((err) =>
                res.status(200).json({ message: "KAYITLI KULLANICI" })
              )
          )
          .catch((err) =>
            res.status(400).json({ message: "KAYITLI KULLANICI" })
          );
      }
    })
    .catch((err) => res.status(500).json({ message: "KAYITLI KULLANICI" }));
};

exports.signIn = (req, res) => {
  const { email, password } = req.body.data;
  User.findOne({ where: { email } })
    .then((ress) => {
      if (!ress) {
        return res
          .status(404)
          .json({ message: "KULLANICI ADI VEYA EMAİL HATALI" });
      }
      return bcrypt.compare(password, ress.password).then((r) => {
        if (r) {
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
            time: Date(),
            userId: ress.id,
            name: ress.name,
            surname: ress.surname,
            email: ress.email,
            password: ress.password,
          };
          let token = jwt.sign(data, jwtSecretKey, { expiresIn: "1d" });
          return res.status(200).json(token);
        }
        return res
          .status(404)
          .json({ message: "KULLANICI ADI VEYA EMAİL HATALI" });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "SUNUCU HATASI" });
    });
};

// burada req.session.usere veri atbildin şimdi o attıgın verinin idyi postlara atacaksın
