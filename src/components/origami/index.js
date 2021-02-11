import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam'



import 'firebase/database';


class Origami extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origami: []
    }
  }
  getOrigami = async () => {
      const {length} = this.props
    const promise = await fetch(`https://myblogproject-4573a-default-rtdb.europe-west1.firebasedatabase.app?length=${length}`)
    const origami = await promise.json()

    this.setState({
      origami
    })

  }
  renderOrigami() {
    const { origami } = this.state
    return origami.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />

      )
    })
  }
  componentDidMount() {
    this.getOrigami()
  }
  render() {
       /* console.log(this.state.origami)
     */  return (
      
          <div className={styles["origami-wrapper"]}>
            {this.renderOrigami()}
          </div>
        
   
    )
  }
}






  export default Origami;
