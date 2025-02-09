const Group = require("../../models/group.js");

const createGroup = async (args, { req }) => {
    try {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const meetId = Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        
        const group = await Group.create({
            meetId: meetId,
        });

        if (group) {
            return {
                ...group._doc,
            }
        } else {
            throw new Error("Some error occured! Please try again later");
        }

    } catch (err) {
        throw err;
    }
}

const viewAllGroups = async (args, {req}) => {
    try {
        const groups = await Group.find({});

        return groups;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createGroup,
    viewAllGroups,
}