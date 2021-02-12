import React from 'react'
import styles from './index.module.css' 
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origami from '../../components/origami'

import SubmitButton from '../../components/button/submit-button'

const ShareThoughtsPage = () => {

    return (
   <PageWrapper>
       <div className={styles.container}>

        <Title title="Share your thoughts..."/>
        <div>

        <textarea className={styles.textarea} defaultValue="Publication..."/>
        </div>
        <div>

        <SubmitButton title="Post" />
        </div>
       </div>
       <Origami length={3}/>
   </PageWrapper>
    )
}

export default ShareThoughtsPage;
