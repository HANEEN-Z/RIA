import React, { Component, Fragment } from 'react';

import HomeTop from '../components/home/HomeTop';
import Categorie from '../components/home/Categorie';
import Volumes from '../components/home/Volumes';
import Additions from '../components/home/Additions';


export class HomePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <HomeTop />
        <Categorie />
        <Volumes />
        <Additions />
        
      </Fragment>
    )
  }
}

export default HomePage
