import React from 'react';

import Editor from "./Editor.js";
import ProgressBar from "./ProgressBar.js";
import SaveManager from "./SaveManager.js";
import Counter from "./Counter.js";

//below is a mock service
function makeFakeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('Success!')
            }else{
                reject('Failed')
            }
        }, 3000);
    });
}

function countWords(text) {
  return text? text.match(/\w+/g).length: 0
}

class WordCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(currentText) {
    this.setState(() => {
      return {text: currentText}
    })
  }

    render() {
        const {targetWordCount} = this.props;
        const {text} = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;
            return (
                <form className="measer pa4 sans-serif">
                    <Editor text={text} onTextChange={this.handleTextChange}/>
                    <Counter count={wordCount}/>
                    <ProgressBar completion={progress}/>
                    <SaveManager saveFunction={makeFakeRequest} data={this.state} />
                </form>
        )
    }
}

export default WordCounter;
