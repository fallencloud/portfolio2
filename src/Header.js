import React from "react";
import $ from "jquery";

const Header = () => {
  $(function() {
    let quoteGen = [
      "Logic was my first love.",
      "Team Skynet FTW!",
      "Am I fluent yet?"
    ];
    let aboutDeets = [
      "My first brush with development was a class that focused on algorithms outside of any programming language. I was hooked!",
      "I hope to eventually develop software that uses AI to create custom learning experiences.",
      "Although my core strengths are primarily front-end technologies, I hope to eventually master the entire web stack."
    ];

    let $splashQuote = $("h1.splash-quote").fadeTo(3000, 0);
    let $splashBody = $(".splash-body").fadeTo(3000, 0);

    let i = 0;
    setInterval(function() {
      i = (i + 1) % quoteGen.length;

      $splashQuote.html(`${quoteGen[i]}`);
      $splashQuote.fadeTo(3000, 1.0);
      $splashQuote.fadeTo(3000, 0);

      $splashBody.html(`${aboutDeets[i]}`);
      $splashBody.fadeTo(3000, 1.0);
      $splashBody.fadeTo(3000, 0);
    }, 6000);
  });

  return (
    <div class="row">
      <div class="col">
        <div class="jumbotron jumbotron-fluid bg-info text-white text-center">
          <div class="container">
            <h1 class="display-3 splash-quote">Logic was my first love.</h1>
            <p class="lead splash-body">
              My first brush with development was a class that focused on
              algorithms outside of any programming language. I was hooked!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
