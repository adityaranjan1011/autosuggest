import React, { Component } from "react";
import Autosuggest from "./Component/autosuggestion";
import "./App.css";
// import ClickOutside from "./Component/Clickoutside";
// import Companies from "./Component/companies";

class App extends Component {
  handleOnClick=()=>{
    console.log("handleOnClick")
  }
  render() {
    return (
      <div className="App">
        <div className="App-component">
          <div className="App-component">
            {/* <Autosuggest items={Companies}/> */}
            {/* <ClickOutside>
              <Autosuggest />
            </ClickOutside> */}
            
           <Autosuggest/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
