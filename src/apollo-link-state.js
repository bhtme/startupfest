import gql from 'graphql-tag';

const ClientState = {
  defaults: {
    Scores: [],
    Favorites: [],
    Startups: [],
  },
  resolvers: {
    Query: {
      Startups: (obj, { name }, { cache }) => {
        const query = gql`
          query GetStartups {
            Startups @client {
              name
              description
              imageUrl
              teamCount
              annualReceipt
              Segment {
                name
                code
              }
            }
          }
        `;
        const read = cache.readQuery({ query });
        const find = read.Startups.filter(startup => startup.name === name);
        return find;
      },
    },
    Mutation: {
      addStartup: (_, {
        name, description, imageUrl, segmentName,
        segmentCode, teamCount, annualReceipt,
      }, { cache }) => {
        const query = gql`
          query GetStartups {
            Startups @client {
              name
              description
              imageUrl
              teamCount
              annualReceipt
              Segment {
                name
                code
              }
            }
          }
        `;
        const previous = cache.readQuery({ query });
        const newStartup = {
          name,
          description,
          imageUrl,
          teamCount,
          annualReceipt,
          Segment: {
            name: segmentName,
            code: segmentCode,
            __typename: 'Segment',
          },
          __typename: 'Startup',
        };
        const data = {
          Startups: previous.Startups.concat([newStartup]),
        };
        cache.writeData({ data });
        return newStartup;
      },
    },
  },
};

export default ClientState;
