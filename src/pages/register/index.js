import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import PageWrapper from '../../components/page-wrapper'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'



class RegisterPage extends Component {
  
    constructor(props){
        super(props)

        this.state= {
            email: "",
            password: "",
            rePassword: ""
        }
    }

static contextType = UserContext

onChange = (event,type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
}

handleSubmit = async(event) =>{
    event.preventDefault()
    const{
           username,
           password 
    }= this.state


    await authenticate('http://localhost:9999/api/user/register', {
        username,
        password
    },(user) => {
        this.context.logIn(user)
        this.props.history.push('/')
    },(e) => {
        console.log('Error',e)
    }
)
}

    render() {
        const{
            username,
            password,
            rePassword
        }= this.state

        return (
            <PageWrapper>


                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input
                        value={username}
                        onChange={(e) => this.onChange(e, 'username')}
                        label="Username"
                        id="username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <Input
                        type="password"
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-Password"
                        id="re-password"
                    />

                    <SubmitButton title="Register" />
                </form>
            </PageWrapper>
        )
    }
}

export default RegisterPage