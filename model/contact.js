const mongoose = require("mongoose");
const Contact = mongoose.model("Contact", {
  nama: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  nohp: {
    type: String,
    require: true,
  },
});

module.exports = Contact;
