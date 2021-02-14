import React, { useState, useCallback, useEffect, useMemo, useContext } from 'react'
import styles from './index.module.css'
import Origam from '../origam'
import getOrigami from '../../utils/origami'
import UserContext from '../../Context'

const Origami =(props) => {
  const context = useContext(UserContext)
const [origami, setOrigami] =(context.origamis || [])

const getOrigami = useCallback(async () => {
const origami = await getOrigami(props.length)
setOrigami(origami)
}, [props.length])



const renderOrigami = useMemo(()=> {
 
  return origami.map((origam, index) => {
    return (
      <Origam key={origam._id} index={index} {...origam} />

    )
  })
},[origami])

useEffect(() => {
  getOrigami()
}, [props.updatedOrigami, getOrigami])




  return (
      
    <div className={styles["origami-wrapper"]}>
      {renderOrigami()}
    </div>
  

)


}






  export default Origami;
