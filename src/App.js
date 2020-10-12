import React from 'react';
import './App.css';
import './placeholder.js';
import markdownDefault from './placeholder.js';
const marked = require("marked");




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: markdownDefault,
      preview: ''
     };
  }

handleChange(event) {
  this.setState ({
    text: event.target.value
  })
}

getMarkdownText() {
  var rawMarkup = marked(this.state.text, {sanitize: true});
  return { __html: rawMarkup };
}

  render() {
    return (
      <div className="App">
        <textarea id="editor" onChange={this.handleChange.bind(this)} value={this.state.value}>{markdownDefault}</textarea>
        <div dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;

