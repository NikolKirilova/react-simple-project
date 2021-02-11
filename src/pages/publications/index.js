import React, { Component } from 'react'
import styles from './index.module.css'

import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origami from '../../components/origami'


import 'firebase/database';


const Publications =() => {

 
 
 
      return (
      < PageWrapper>
       
          <Title title="Publications"/>
        
        <Origami/>
           
        
      </PageWrapper>
    )
  }







  export default Publications;
