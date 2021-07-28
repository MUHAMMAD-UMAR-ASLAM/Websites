import React, { Component } from 'react'
import styles from './Formtitle.module.css';
import Zoom from 'react-reveal/Zoom'

class Formtitle extends Component {
    render() {
        return (
            <>
            <Zoom> <h1 className={`${styles.fontHeading} text-center`}>ADD CAR</h1></Zoom>   
            </>
        )
    }
}
export default Formtitle