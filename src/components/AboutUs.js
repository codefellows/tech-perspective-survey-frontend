import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bios from './aboutUs.json';
import BioCard from './BioCard'

export default class AboutUs extends Component {

  render() {
    const data = bios.data;
    return (

      <>
        <h1 id="aboutTitle">We Are Team Red</h1>
        <Container fluid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row xs={1} sm={2} md={4} lg={4}>
            {data.map((person, index) => (
              <BioCard key={index}
                img={person.img}
                name={person.name}
                bio={person.bio}
                linkedin={person.linkedin}
                github={person.github}
              />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}
