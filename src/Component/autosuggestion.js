import React, { Component } from "react";
import "./autosuggestion.css";

class autosuggestion extends Component {
  constructor(props) {
    super(props);
    this.items = [
      "Hindustan Aeronautics Limited",
      "Shifty",
      "Global Cameo",
      "Blue Star",
      "Rapido",
      "MindTree"
    ];
    this.state = {
      suggestions: [],
      inputValue: "",
      activeSuggestion: 0,
      open: false
    };
    // this._onBlur = this._onBlur.bind(this)
    // this._onFocus = this._onFocus.bind(this)
  }

  onTextChanged = e => {
    // const {items} = this.props;
    const value = e.target.value;
    console.log(value);
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      console.log(regex);
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, inputValue: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      inputValue: value,
      suggestions: []
    }));
  }

  // abc=()=>{
  //   this.setState(() => ({
  //     suggestions: []
  //   }));
  // }

  handleKeydown = e => {
    const { activeSuggestion, suggestions } = this.state;
    if (e.key === "Enter") {
      this.setState({
        activeSuggestion: 0,
        inputValue: suggestions[activeSuggestion],
        suggestions: []
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      if (suggestions[activeSuggestion - 1]) {
        this.setState({
          activeSuggestion: activeSuggestion - 1,
          inputValue: suggestions[activeSuggestion - 1]
        });
      }
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === suggestions.length) {
        return;
      }
      if (suggestions[activeSuggestion + 1]) {
        this.setState({
          activeSuggestion: activeSuggestion + 1,
          inputValue: suggestions[activeSuggestion + 1]
        });
      }
    }
  };

  renderSuggestion() {
    // const { activeSuggestion , suggestions } = this.state;
    const {suggestions}= this.state;

    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {/* {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}       */}

{suggestions.map((item,i) => (
          <li 
          // key={ item._id }
          // className={activeSuggestion === i ? 'active' : null}
          onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))} 
       
      </ul>
    );
  }

  handleBlur = () => {
    this.setState({
      open: !this.state.open
      });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="autosuggest-label">
        <label>Company Names</label>

        <div
          className="autosuggest"
          onBlur={this.handleBlur}
          onFocus={this.handleBlur}
          tabIndex="0"
        >
          <input
            className="autosuggest-input"
            type="text"
            value={inputValue}
            onKeyDown={this.handleKeydown}
            onChange={this.onTextChanged}
            />
          {/* {this.renderSuggestion() } */}
          {this.state.open && this.renderSuggestion()}
        </div>
      </div>
    );
  }
}

export default autosuggestion;
