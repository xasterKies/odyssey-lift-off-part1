const gql = require("graphql-tag")

const tyepDefs = gql`

type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
}
"A track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

"Author of a complete track"
type Author {
    id: ID!
    name: String!
    photo: String
}
`;

module.exports = tyepDefs;