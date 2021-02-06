import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


function Home(){

    // const {
    //     loading,
    //     data: { getUsers: users }
    //   } = useQuery(FETCH_USERS_QUERY);
    
    return(
        <Card>
        <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Name</Card.Header>
          <Card.Description>
            Username: 
          </Card.Description>
          <Card.Description>
            Email: 
          </Card.Description>
        </Card.Content>
      </Card>
    )
}

const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      id
      username
      email
    }
  }
`;
export default Home;