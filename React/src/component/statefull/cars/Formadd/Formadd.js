import React, { Component } from 'react'
import Formtitle from '../../../stateless/fromtitle/Formtitle'
import Button from '../../../stateless/BUTTON/Button'
import Fade from 'react-reveal/Fade'

class Formadd extends Component {
    state={
        brand:'',
        color:'',
        price:''
    
    }
    validationhandler =(event)=>{
         event.preventDefault();
        // console.log(this.state.brand);
        // console.log(this.state.color);
        // console.log(this.state.price);
        this.props.addcar(this.state.brand,this.state.color,this.state.price)
        this.setState(
            {
                brand:"",
                color:"",
                price:""
            }
        )
    }
    render() {
        return (
            <>
              <Formtitle/>
<Fade top cascade>              
            <form>
                <div className="form-group">
                    <label >BRAND</label>
                    <input className="form-control" type="text"  id="brand"
                    onChange={(event)=>{this.setState({brand:event.target.value})}}
                    value={this.state.brand}
                    />
                    

                </div>
                <div className="form-group">
                    <label >COLOR</label>
                    <input className="form-control" type="text"  id="COLOR"
                    onChange={(event)=>{this.setState({color:event.target.value})}}
                    value={this.state.color}
                    />
                    
                </div>
                <div className="form-group">
                    <label >PRICE</label>
                    <input className="form-control" type="number"  id="PRICE"
                    onChange={(event)=>{this.setState({price:event.target.value})}}
                    value={this.state.price}
                    />
                    
                </div>
                <div className="form-group">
                
                      <Button Clic={this.validationhandler} btntype="btn-primary m-2">VALIDATE</Button>
                    
                </div>
                
            </form>
            </Fade>

            </>
        )
    }
}

export default Formadd
