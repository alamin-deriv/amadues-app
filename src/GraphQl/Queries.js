import { gql } from "@apollo/client";

export const GET_STAR_WAR_DATA = gql`
  query starwar {
    allPeople {
      people {
        name
        id
        gender
        height
        birthYear
        homeworld {
          name
        }
        filmConnection {
          films {
            id
            title
          }
        }
      }
    }
    allFilms {
      films {
        id
        title
      }
    }
  }
`;
