import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';


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

const backgrounds = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image0];
export function getBackgroundImage(id: Number) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

export const get_Person = gql`
query getPerson($url: String) {
  person(url: $url) {
    url
    name
    height
    mass
    gender
    homeworld
  }
}
`;
interface PersonProps extends RouteComponentProps {
  $name: String,
}

const Person: React.FC<PersonProps> = ({ $name }) => {

  console.log('Id', $name)

  const {
    data,
    loading,
    error
  } = useQuery(get_Person, { variables: { url: `https://swapi.dev/api/people/?search=${$name}` } })

  if (loading) return <p>Loading...</p>;
  if (error) { console.log(error); return <p>Error</p> };
  if (!data) {
    return <p>Not found</p>
  } 
  let id = Math.floor(Math.random() * 10) + 1
  return (

    <div
      style={{
        height: '100vh',
        textAlign: "center",
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: getBackgroundImage(id),
      }} >
      {data.person &&
        <div>
          <h1>Name: {data.person.name}</h1>
          <h2>Gender: {data.person.gender}</h2>
          <h2>Height: {data.person.height}</h2>
          <h2>Mass: {data.person.mass} </h2>
          <h3>Homeworld: {data.person.homeworld}</h3>
          
        </div>
      }
    </div>
  );
}

export default Person;

