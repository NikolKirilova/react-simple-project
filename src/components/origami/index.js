import React, {Component} from 'react'
import styles from './index.module.css'

class Origami extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origami: []
        }
    }
    getOrigami = async () => {
        const promise = await fetch('http://localhost:9999/api/origami')
        const origami= await promise.json()

        this.setState({
            origami
        })
    }
    renderOrigami(){
        const {origami} = this.state
        return origami.map(origam => {
            return (
                <Origam key={origam._id}{...origam}/>
                  
            )
        })
    }
    componentDidMount(){
        this.getOrigami()
    }
    render(){
        console.log(this.state.origami)
     
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origami</h1>
                <div className={styles["origami-wrapper"]}>
                {this.renderOrigami()}
                </div>
            </div>
        )
        }
}

export default Origami