import React from 'react'
import { images } from '../../constants';
import './Testimonial.scss'
import {Card, Text,Badge, Avatar, Grid,Button,Link,Spacer} from '@nextui-org/react'

const Tesimonial = () => {
  return (
    <div className='contact' id='contact'>
      <div className='text'>
        <h3 style={{fontSize:'4rem'}} className='head-text'>Contact Me</h3>
      
      </div>
      <div className="card app__flex">
        <Card css={{ mw: "400px" }}>
        <Card.Header css={{alignItems:"center", justifyContent:'center'}}>
            <Text size={30} b>Let's Chat</Text>
          </Card.Header>

          <Card.Image
          src={images.contact}
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
          />

          <Card.Body>
          
            <Text></Text>
       <Grid.Container gap={2} css={{alignItems:"center", justifyContent:'center'}} >
      <Grid>
        <Link href='https://www.facebook.com/dulana.manul'>
        <Avatar css={{ cursor: 'pointer'}}
          squared 
          src={images.fb} />
          </Link>
      </Grid>
      
      <Grid>
        <Link href='https://wa.me/094716259373'>
        <Avatar css={{ cursor: 'pointer'}}
          squared 
          src={images.wtsap} />
          </Link>
      </Grid>
      
      <Grid>
        <Link href='https://www.linkedin.com/in/dulana-wanigathunga-6a5369211/'>
        <Avatar css={{ cursor: 'pointer'}}
          squared 
          src={images.linkdin}/>
          </Link>
      </Grid>
      <Grid>
        <Link href='https://www.instagram.com/mr_d_manu/'>
        <Avatar css={{ cursor: 'pointer'}}
          squared 
          src={images.inster}/>
          </Link>
      </Grid>


   

      
    </Grid.Container>


<div className='card-btn' >
    <Link href="mailto:dulana.m.waniga@gmail.com">
      
        <Button shadow color="success" size="lg"
        css={{
          marginTop:"0.5rem",
          marginLeft:"4.3rem",
          
          }}>
           <Text
                css={{ color: "inherit" }}
                size={20}
                weight="bold"
                transform="uppercase"
              >
                Contact Me
              </Text>
        </Button>
    </Link>

    </div>
    
  

     
      
        
      </Card.Body>
        </Card>
      </div>

    </div>
  )
}

export default Tesimonial