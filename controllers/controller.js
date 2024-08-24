const bcrypt = require("bcryptjs");

const loginReq = async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  const result = await fetch(
    "http://localhost:9000/users/?username=" + username
  );
  if (!result.ok) {
    res.status(404).send({ message: "User Not Found" });
    return null;
  }

  const data = await result.json();
  if (data.length == 0) {
    res.status(404).send({ message: "User Not Found" });
    return null;
  }
  bcrypt.compare(password, data[0].password, function(err, result) {
    if (err) throw err;
    if (result === true) {
        res
            .status(200)
            .send({
                message: "Login Successful",
                averagelength: data[0].averagelength,
      });
    return null;
    } else {
        // Passwords do not match
        res.status(401).send({ message: "Wrong Password" });
        return null;
    }
});
 
};

const stringLength = async (req, res) => {
  text = req.body.text;

  if (req.body.username) {
    username = req.body.username;

    const result = await fetch(
      "http://localhost:9000/users/?username=" + username
    );
    if (!result.ok) {
      return null;
    }

    const data = await result.json();
    currentAverageLenth = data[0].averagelength;
    currentNoOfWords = data[0].noofwords;

    currentTotal = currentAverageLenth * currentNoOfWords;

    newTotal = currentTotal + text.length;

    newAverage = newTotal / (currentNoOfWords + 1);

    const postResult = await fetch(
      "http://localhost:9000/users/" + data[0].id,
      {
        method: "PATCH",
        body: JSON.stringify({
          averagelength: newAverage,
          noofwords: currentNoOfWords + 1,
        }),
      }
    );

    if (postResult.ok) {
      res
        .status(200)
        .send({ message: text.length, userAverage: newAverage });
    } else { 
      res
        .status(200)
        .send({
          message: text.length,
          userAverage: newAverage,
          errMsg: "Database not updated",
        });
    }
  } else {
    res.status(200).send({ message: text.length });
  }
};

const signUp = async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hashpassword) => {
      const response = await fetch("http://localhost:9000/users", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: hashpassword,
          averagelength: 0,
          noofwords: 0,
        }),
      });

      if (response.ok) {
        res.status(201).send({ message: "New User Created Successfully" });
        return null;
      } else {
        res.status(500).send({ message: "Unable to create user" });
      }
    });
  });
};
// Export of all methods as object
module.exports = {
  signUp,
  loginReq,
  stringLength,
};
