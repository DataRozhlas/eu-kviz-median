﻿/* eslint-disable react/no-danger */
import React, { Component } from "react";
import { render } from "react-dom";
import { questions, choices, voterCategories } from "./data";
import { GrafVztah } from "./grafVztah";
import { GrafPostoje } from "./grafPostoje";
import { GrafDuvera } from "./grafDuvera";
import { GrafVliv } from "./grafVliv";
import { GrafPreference } from "./grafPreference";

const root = "https://data.irozhlas.cz/eu-kviz-median/";
const isDesktop = window.innerWidth > 600;

function processRawResults(results) {
  return results.map((el, idx) => [Math.round(el * 100), idx]).sort((a, b) => b[0] - a[0]);
}

const DetailBox = ({ catId }) => (
  <div id="detail-box">
    <div className="detail-box-radary">
      <GrafVztah catId={catId} />
      <GrafPostoje catId={catId} />
    </div>
    <div className="detail-box-radary">
      <GrafDuvera catId={catId} />
      <GrafVliv catId={catId} />
    </div>
    <GrafPreference catId={catId} />
  </div>
);

class EuApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 19,
      answers: new Array(20).fill(1),
      done: false,
      results: undefined,
      shareLink: undefined,
      catId: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendResults = this.sendResults.bind(this);
    this.FbShare = this.FbShare.bind(this);
    this.TwShare = this.TwShare.bind(this);
  }

  sendResults() {
    const { answers } = this.state;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://k18xbfipii.execute-api.eu-west-1.amazonaws.com/prod");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const results = processRawResults(JSON.parse(xhr.responseText));
        this.setState({ results, catId: results[0][1] });

        const xhr2 = new XMLHttpRequest();
        xhr2.open("POST", "https://gh250k574a.execute-api.eu-west-1.amazonaws.com/prod");
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.onload = () => {
          if (xhr2.status === 200) {
            this.setState({
              shareLink: xhr2.responseText.substring(1, xhr2.responseText.length - 1),
            });
          }
        };
        xhr2.send(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(answers));
  }

  loadGraphs(catId) {
    this.setState({ catId });
  }

  FbShare() {
    const { shareLink } = this.state;
    window.open(`${`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}`, "Sdílení", "width=550,height=450,scrollbars=no");
  }

  TwShare() {
    const { shareLink } = this.state;
    window.open(`${`https://twitter.com/share?url=${shareLink}`}`, "Sdílení", "width=550,height=450,scrollbars=no");
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
      question, done, results, shareLink, catId,
    } = this.state;

    return (
      <React.Fragment>
        <div id="kviz">
          {!done ? (
            <React.Fragment>
              <div id="question-header">
                {`Otázka ${question + 1} z 20`}
              </div>
              <div id="question-text" dangerouslySetInnerHTML={{ __html: questions[question] }} />
              <div id={`question-buttons-${choices[question].length}`}>
                {choices[question].map((val, idx, arr) => (
                  <button type="button" key={val} className={`btn btn-${arr.length} btn-${arr.length}-${idx + 1}`} value={idx + 1} onClick={this.handleClick}>{val}</button>
                ))}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div id="done">
                {"Hotovo! Ve vztahu k Evropské unii jste:"}
              </div>
              {results
                ? (
                  <React.Fragment>
                    <div id="top-result" onClick={() => this.loadGraphs(results[0][1])}>
                      <img src={`${root}img/${results[0][1]}.svg`} id="top-result-img" alt={voterCategories[results[0][1]]} />
                      <div id="top-result-name">
                        {voterCategories[results[0][1]]}
                      </div>
                      <div id="top-result-pct">
                        {`${String(results[0][0]).replace(".", ",")} %`}
                      </div>
                    </div>
                    <div id="results-categories">
                      {results.slice(1).map(el => (
                        <div className="results-category" key={el[1]} onClick={() => this.loadGraphs(el[1])}>
                          <img src={`${root}img/${el[1]}.svg`} className="results-img" alt={voterCategories[el[1]]} />
                          <div className="results-category-name">
                            {voterCategories[el[1]]}
                          </div>
                          <div className="results-category-pct">
                            {`${String(el[0]).replace(".", ",")} %`}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div id="results-share">
                      {isDesktop
                        ? (
                          <React.Fragment>
                            <button className="btn btn-primary" type="submit" onClick={this.FbShare} disabled={shareLink ? null : true}>Sdílet na Facebooku</button>
                            <button className="btn btn-primary" type="submit" onClick={this.TwShare} disabled={shareLink ? null : true}>Sdílet na Twitteru</button>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="submit" disabled={shareLink ? null : true}>Sdílet na Facebooku</button></a>
                            <a href={`https://twitter.com/share?url=${shareLink}`} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="submit" disabled={shareLink ? null : true}>Sdílet na Twitteru</button></a>
                          </React.Fragment>
                        )}
                    </div>
                  </React.Fragment>
                ) : (
                  <div id="waiting">
                    {"Výsledek se načítá..."}
                  </div>
                )
                }
            </React.Fragment>
          )}
        </div>
        <DetailBox catId={catId} />
      </React.Fragment>
    );
  }
}

// ========================================
render(<EuApp />, document.getElementById("eu-app"));
