const GroupSchema = `

    type Group {
        _id: ID!
        meetId: String
        numParticipants: String
        meetType: String
        topic: String
    }

    input GroupInput {
        _id: ID
        meetId: String
        numParticipants: String
        meetType: String
        topic: String
    }

`

module.exports = {GroupSchema};