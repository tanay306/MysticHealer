const GroupSchema = `

    type Group {
        _id: ID!
        meetId: String
        numParticipants: String
    }

    input GroupInput {
        _id: ID
        meetId: String
        numParticipants: String
    }

`

module.exports = {GroupSchema};