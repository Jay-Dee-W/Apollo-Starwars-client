import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { Link } from '@reach/router';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';
import image9 from '../assets/images/image9.jpg';
import image0 from '../assets/images/image0.jpg';
import { unit } from '../styles';


const backgrounds = [image1, image2, image3,image4, image5, image6,image7, image8, image9, image0];
export function getBackgroundImage(id: Number) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}
type PersonType = {
    name: String,
    url: String,
}

interface PersonProps {
   Person: PersonType;
}

const PersonCard: React.FC<PersonProps> = ({ Person }) => {
 
  let id = Math.floor(Math.random() * 10) + 1
  return (
    <StyledLink
      to={`/person/${Person.name}`}
      style={{
        backgroundImage: getBackgroundImage(id),
      }}
    >
      <h3>{Person.name}</h3>
      
    </StyledLink>
  );
}

export default PersonCard;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: 'white',
  backgroundSize: 'content',
  repeat: "none",
  backgroundPosition: 'center',
});

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  height: 193,
  width: '50%',
  marginTop: padding,
  marginLeft: '20%',
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
});
