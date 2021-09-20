import React from "react";
import Frown from "../static/img/review/frown.svg";
import Neutral from "../static/img/review/neutral.svg";
import Happy from "../static/img/review/happy.svg";
import "../static/css/review.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav";


export default function Feedback() {
  return (
    <div>
      <Nav />
      <div className="feedback-container ">
        <div className="feedback-card mt-4">
          <div className="feedback-header">
            <h2 className="feedback-header-title-intro">
              Please give us your valuable feedback
            </h2>
            <h2 className="feedback-header-next-title">Restaurant Name</h2>
          </div>
          <div className="feedback-body">
            <div>
              <h1 className="feedback-body-header">How was the food?</h1>
              <div className="reactions">
                <label>
                  <input type="radio" name="reaction" value="Frown" id="f" />
                  <img src={Frown} alt="Frown" className="Frown" />
                </label>

                <label>
                  <input type="radio" name="reaction" value="Neutral" id="n" />
                  <img src={Neutral} alt="Neutral" className="Neutral" />
                </label>

                <label>
                  <input type="radio" name="reaction" value="Happy" id="h" />
                  <img src={Happy} alt="Happy" className="Happy" />
                </label>
              </div>
              <div className="feedback-textarea-container">
                <textarea
                  className="feedback-textarea"
                  id="suggested-improvements"
                  placeholder="(Optional) Suggest improvements..."
                  rows="5"
                  spellcheck="false"
                ></textarea>
              </div>
              <hr className="feedback-hr" />
            </div>

            <button type="submit" className="send-button">
              <span className="text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
