import React  from 'react';
import Button  from '../BUTTON/Button';
import Zoom from 'react-reveal/Zoom'
 const Car = (props) => {

    
        return (
            <Zoom>
                 <tr>
                       <td>{props.brand}</td>
                       <td> {props.color}</td>
                       <td>{props.price + "$"} </td>
                       <td> <Button btntype="btn-primary" Clic={props.clickEdit} >EDIT</Button></td>

                       <td><Button btntype="btn-danger" Clic={props.clickDel}> DELETE</Button></td>



                      
                       </tr>
            </Zoom>
        )
    }


export default Car
