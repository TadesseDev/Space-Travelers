import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Rocket from '../components/Rocket';

export default function Rockets() {
  const rockets = useSelector((state) => state.Rockets);
  return (
    <Container data-testid="list-of-rockets">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </Container>
  );
}
