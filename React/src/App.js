import React,{Component , Fragment} from 'react';
import Cars from './component/statefull/cars/Cars';
import Heading from './component/stateless/heading/Heading';
import Button from './component/stateless/BUTTON/Button';
import Zoom from "react-reveal/Zoom"

class App extends Component {

  state = {
    isformopen:false
  }
  addCarHandler =()  =>

  {
    this.setState((prevstate)=>({
      isformopen:!prevstate.isformopen}))
  }
render()
{
 return(

    <div className="container">  
      <Heading>List of Cars</Heading>
      <Cars closeForm={this.addCarHandler} isformopen={this.state.isformopen}/>
 <Zoom>
      <Button Clic={this.addCarHandler} btntype="btn-success w-100" >{this.state.isformopen ? "Close" :"ADD"}</Button>
      </Zoom>
 
  </div>
   );
  }
}


export default App;
