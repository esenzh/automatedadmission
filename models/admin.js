const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

<<<<<<< HEAD
module.exports = mongoose.model('User', adminSchema);
=======
module.exports = mongoose.model('Admin', adminSchema);
>>>>>>> origin/authorization
