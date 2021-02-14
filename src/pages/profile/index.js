import React, { useContext, useEffect, useState, useCallback} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import PageWrapper from '../../components/page-wrapper'
import Origami from '../../components/origami'
import UserContext from '../../Context'

const ProfilePage = () => {
        const [username, setUsername] = useState(null)
        const [posts, setPosts] = useState(null)
        const context = useContext(UserContext)
        const params = useParams()
        const history = useHistory()
        
        const logOut =() =>{
            context.logOut()
            history.push('/')
        }

        const getData = useCallback(async() => {
            const id = params.userid
            const response = await fetch('http://localhost:9999/api/user?id=${id}')

            if(!response.ok){
                history.push('/error')
            }else {
        
            const user = await response.json()
            setUsername(user.username)
            setPosts(user.posts && user.posts.length)
            }
        },[params.user.id, history])

useEffect(() => {
    getData()
    
 }, [getData])

        if(!username){
            return (
                <PageWrapper>
                    <div>
                        Loading...
                    </div>
                </PageWrapper>
            )
        }
       return(
            <PageWrapper>

            <div>
            <p> User: {username}</p>
            <p> Posts: {posts}</p>

            <button onClick={logOut}>Logout</button>

            </div>

                <Origami length={3}/>
            </PageWrapper>
      
       )
}

export default ProfilePage