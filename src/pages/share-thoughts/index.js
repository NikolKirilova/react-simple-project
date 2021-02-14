import React , {useState} from 'react'
import styles from './index.module.css' 
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origami from '../../components/origami'
import getCookies from '../../utils/cookie'
import SubmitButton from '../../components/button/submit-button'

const ShareThoughtsPage = () => {
    const[publication, setPublication] = useState('')
    const [updatedOrigami, setUpdatedOrigami] = useState([])

    const handleSubmit = async () =>    {
        await fetch('http://localhost:9999/api/origami',{
        method:'POST',
        body: JSON.stringify({
            description: publication
        }),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getCookies('x-auth-token')
        }
    })
    setPublication('')
    setUpdatedOrigami([...updatedOrigami, 1])
    }

    return (
   <PageWrapper>
        <Title title="Share your thoughts..."/>
       <div>
       <div className={styles.container}>
        <textarea value={publication} className={styles.textarea} onChange={e => setPublication(e.target.value)}/>
        </div>
        <div>

        <SubmitButton title="Post" onClick={handleSubmit} />
        </div>
        </div>
      
       <Origami length={3} updatedOrigami={updatedOrigami}/>
   </PageWrapper>
    )
}

export default ShareThoughtsPage;
