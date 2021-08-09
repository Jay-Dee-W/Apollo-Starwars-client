import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import PersonCard from '../components/PersonCard'
import Footer from './Footer'

export const get_AllPeople = gql`
query getAllPeople($page: Int) {
  people(page: $page) {
    name
  }
}
`;
interface PeopleProps extends RouteComponentProps {
  page: Number
}

const People: React.FC<PeopleProps> = ({ page }) => {

  const {
    data,
    loading,
    error
  } = useQuery(get_AllPeople, { variables: { page: page } })

  if (loading) return <p>Loading...</p>;
  if (error) { console.log(error); return <p>Error</p> };
  if (!data) {
    return <p>Not found</p>
  }

  return <Fragment >
    {data.people &&
      data.people.map((person: any) =>
        <PersonCard key={person.name} Person={person} />
      )}
    <Footer />
  </Fragment>;
}

export default People;
