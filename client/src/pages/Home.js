import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function Home(){
    
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


export default Home;