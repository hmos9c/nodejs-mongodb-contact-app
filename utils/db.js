const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "sanas",
//   email: "sanas@gmail.com",
//   nohp: "08213456789",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
