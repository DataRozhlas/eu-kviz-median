/* eslint-disable react/no-danger */
import React, { Component } from "react";
import { render } from "react-dom";
import { questions, choices, voterCategories } from "./questions";

class Kviz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 19,
      answers: new Array(20).fill(0),
      done: false,
      results: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendResults = this.sendResults.bind(this);
  }

  sendResults() {
    const { answers } = this.state;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://k18xbfipii.execute-api.eu-west-1.amazonaws.com/prod");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.setState({ results: JSON.parse(xhr.responseText) });

        const xhr2 = new XMLHttpRequest();
        xhr2.open("POST", "https://gh250k574a.execute-api.eu-west-1.amazonaws.com/prod");
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.onload = () => {
          if (xhr2.status === 200) {
            console.log(xhr2.responseText);
          }
        };
        xhr2.send(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(answers));
  }

  handleClick(e) {
    const { question, answers } = this.state;

    answers[question] = e.target.value;

    this.setState({ answers });

    if (question !== questions.length - 1) this.setState({ question: question + 1 });
    else {
      this.setState({ done: true });
      this.sendResults();
    }
  }

  render() {
    const {
      question, done, results, answers,
    } = this.state;

    return (
      <div>
        {!done ? (
          <div>
            <div id="question-header">
              {`Otázka ${question + 1} z 20`}
            </div>
            <div id="question-text" dangerouslySetInnerHTML={{ __html: questions[question] }} />
            <div id={`question-buttons-${choices[question].length}`}>
              {choices[question].map((val, idx, arr) => (
                <button type="button" key={val} className={`btn btn-${arr.length} btn-${arr.length}-${idx + 1}`} value={idx + 1} onClick={this.handleClick}>{val}</button>
              ))}
            </div>
            { "Odpovědi: " }
            { String(answers) }
          </div>
        ) : (
          <div>
            {"Hotovo!"}
            <br />
            {`Výsledek: ${results ? results.map((el, idx) => ` ${voterCategories[idx]}: ${el}`) : "Čekejte..."}`}
          </div>
        )}
      </div>
    );
  }
}

// ========================================
render(<Kviz />, document.getElementById("kviz"));
