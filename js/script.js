/* eslint-disable react/no-danger */
import "core-js/features/object/assign";
import React, { Component } from "react";
import { render } from "react-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {
  questions, choices, voterCategories, root,
} from "./data";
import { DetailBox } from "./detailBox";
import "./secondary";
import "./grafSocDemo";
import "./grafAsociace";
import "./grafDuvera";
import "./grafyDuveraMini";

const isDesktop = window.innerWidth > 600;

function processRawResults(results) {
  return results.map((el, idx) => [Math.round(el * 100), idx]).sort((a, b) => b[0] - a[0]);
}

class EuApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 0,
      answers: new Array(20),
      done: false,
      results: undefined,
      shareLink: undefined,
      catId: 0,
      graphId: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendResults = this.sendResults.bind(this);
    this.FbShare = this.FbShare.bind(this);
    this.TwShare = this.TwShare.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleGraphChange = this.handleGraphChange.bind(this);
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
	console.log(xhr.responseText);
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

  handleCatChange(e) {
    this.setState({ catId: (typeof e === "number") ? e : e.target.value });
  }

  handleGraphChange(e) {
    this.setState({ graphId: e.target.value });
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
      question, done, results, shareLink, catId, graphId,
    } = this.state;

    return (
      <>
        <div id="kviz">
          {!done ? (
            <>
              <div id="question-header">
                {`Otázka ${question + 1} z 20`}
              </div>
              <div id="question-text">
                <div dangerouslySetInnerHTML={{ __html: questions[question] }} />
              </div>
              <div id={`question-buttons-${choices[question].length}`}>
                {choices[question].map((val, idx, arr) => (
                  <button type="button" key={val} className={`btn btn-${arr.length} btn-${arr.length}-${idx + 1}`} value={idx + 1} onClick={this.handleClick}>{val}</button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div id="done">
                {"Hotovo! Ve vztahu k Evropské unii jste:"}
              </div>
              {results
                ? (
                  <>
                    <div id="top-result" role="button" tabIndex={0}>
                      <img src={`${root}img/${results[0][1]}.svg`} id="top-result-img" alt={voterCategories[results[0][1]][0]} />
                      <div id="top-result-name">
                        {voterCategories[results[0][1]][0]}
                      </div>
                      <div id="top-result-pct">
                        {`${String(results[0][0]).replace(".", ",")} %`}
                      </div>
                    </div>
                    <div id="results-categories">
                      {results.slice(1).map(el => (
                        <div className="results-category" role="button" tabIndex={0} key={el[1]}>
                          <img src={`${root}img/${el[1]}.svg`} className="results-img" alt={voterCategories[el[1]][0]} />
                          <div className="results-category-name">
                            {voterCategories[el[1]][0]}
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
                          <>
                            <button className="btn btn-primary" type="submit" onClick={this.FbShare} disabled={shareLink ? null : true}>Sdílet na Facebooku</button>
                            <button className="btn btn-primary" type="submit" onClick={this.TwShare} disabled={shareLink ? null : true}>Sdílet na Twitteru</button>
                          </>
                        ) : (
                          <>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="submit" disabled={shareLink ? null : true}>Sdílet na Facebooku</button></a>
                            <a href={`https://twitter.com/share?url=${shareLink}`} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="submit" disabled={shareLink ? null : true}>Sdílet na Twitteru</button></a>
                          </>
                        )}
                    </div>
                  </>
                ) : (
                  <div id="results-waiting">
                    <ClimbingBoxLoader
                      size={100}
                      sizeUnit="%"
                    />
                    <div>Čekejte prosím...</div>
                  </div>
                )
                }
            </>
          )}
        </div>
        <DetailBox
          catId={catId}
          graphId={graphId}
          handleCatChange={this.handleCatChange}
          handleGraphChange={this.handleGraphChange}
        />
      </>
    );
  }
}

// ========================================
render(<EuApp />, document.getElementById("eu-app"));
