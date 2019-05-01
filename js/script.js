import React, { Component } from "react";
import { render } from "react-dom";
import { questions, choices } from "./questions";

class Kviz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 0,
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
        this.setState({
          results: JSON.parse(xhr.responseText),
        });
        console.log(xhr.responseText);
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
      question, answers, done, results,
    } = this.state;

    return (
      <div>
        <b>{`Odpovědi: ${answers}`}</b>
        <br />
        {!done ? (
          <div id="choices">
            {`Otázka: ${questions[question]}`}
            <br />
            <button type="button" value={1} onClick={this.handleClick}>{choices[question][0]}</button>
            <br />
            <button type="button" value={2} onClick={this.handleClick}>{choices[question][1]}</button>
            <br />
            <button type="button" value={3} onClick={this.handleClick}>{choices[question][2]}</button>
            <br />
            <button type="button" value={4} onClick={this.handleClick}>{choices[question][3]}</button>
            <br />
            <button type="button" value={5} onClick={this.handleClick}>{choices[question][4]}</button>
          </div>
        ) : (
          <div>
            {"Hotovo!"}
            <br />
            {`Výsledek: ${results || "Čekejte..."}`}
          </div>
        )}
      </div>
    );
  }
}

// ========================================
render(<Kviz />, document.getElementById("kviz"));
