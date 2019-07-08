import React, {Component} from 'react';
import Shape from './shape' 
class Selector extends Component {

  constructor()  {
    super();
    this.state = {
      selectedShape: 'square',
    }
  }
selectShape = (shapeName) => {
  this.setState({
    selectedShape: shapeName,
  })
}


  render(){
    return(

      
       <div className = "container">
       <div className = "navbar">
       <div> selected: <span> What foes here?</span></div>
       </div>
       <div className = "shape-list">

       <Shape shape = "square" selectShape = {this.selectShape}/>
       <Shape shape= "circle" selectShape = {this.selectShape}/>
      
       <Shape shape = "triangle" selectShape = {this.selectShape} />
      
    
  

      </div>
      </div>
    
    )
  }
}

export default Selector;