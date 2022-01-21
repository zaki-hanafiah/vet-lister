import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        authorization: `Bearer ${process.env.FAUNA_CLIENT_SECRET}`,
    },
})

export const getVetsList = () => {
    const query = gql`
        query getAllVets {
            allVets {
                data {
                    _id
                    _ts
                    name
                    address
                    operating_hours {
                        weekdays {
                            opens
                            closes
                        }
                        weekends {
                            opens
                            closes
                        }
                    }
                    services
                    social {
                        website
                        facebook
                        instagram
                    }
                    contact
                    rating
                    image
                }
            }
        }
    `

    return graphQLClient.request(query).then(({ allVets: { data } }) => data)
}
