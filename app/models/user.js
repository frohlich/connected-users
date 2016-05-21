// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    id: { type: ObjectId, index: true },
    name: { type : String, require: true },
    mac_address: { type: String, unique: true },
    created_at: Date,
    updated_at: Date
});