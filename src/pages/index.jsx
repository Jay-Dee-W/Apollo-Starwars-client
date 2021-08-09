
import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import People from './People'

// import { AppStateProvider } from '../store/pageCountStore';
import { useContext } from 'react';
import AppContext from '../store/pageCountStore'
import Person from "./Person";



export default function App() {
  let { appState } = useContext(AppContext)

  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <People path="/" page={appState.pageCount} />
        <Person path="person/:$name" />
      </Router>
    </Fragment>
  );
}
