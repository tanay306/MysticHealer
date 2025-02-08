const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    
    meetId: {
        type: String,
    },
    numParticipants: {
        type: String,
        default: "0"
    },
    meetType: {
        type: String,
        default: "",
    },
    topic: {
        type: String,
        default: "",
    }

}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
