import React  from 'react'

 const Button =(props) =>{
    
        return (
            <>
                <button onClick={props.Clic} className={`btn  ${props.btntype}`}> {props.children}</button>
            </>
        )
    }


export default Button
