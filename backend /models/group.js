const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    
    meetId: {
        type: String,
    },
    numParticipants: {
        type: String,
        default: "0"
    },
    
}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
