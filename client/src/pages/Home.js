import React, {useContext} from 'react'
import { Grid, Message } from 'semantic-ui-react'


import { AuthContext } from '../context/auth';



function Home(){

const { user } = useContext(AuthContext);

    return(

        <Grid columns={1}>
        <Grid.Row>
            {user &&
                (
              <Message style={{width: "800px", marginLeft: "15%"}}><h1>Welcome {user.username}!</h1>
              <Message.Header key={user.id} style={{ marginBottom: 20 }}>Your Info</Message.Header>
              <Message.List>
              <Message.Item name={user.name}>Name: {user.name}</Message.Item>
            <Message.Item username={user.username}>Username: {user.username}</Message.Item>
            <Message.Item email={user.email}>Email: {user.email}</Message.Item>
             </Message.List>
            </Message>
            )
          }
        </Grid.Row>
      </Grid>

    )};


export default Home;