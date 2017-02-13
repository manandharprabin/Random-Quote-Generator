

$(document).ready(function() {
  var randomQuote;
  getQuote();

  function getQuote(){
    var quote=
    ["Never Give Up","Life is about making an impact, not making an income.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    "I attribute my success to this: I never gave or took any excuse.",
    "You miss 100% of the shots you don\'t take.",
    "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "I am not a product of my circumstances. I am a product of my decisions."
  ];
    var author=["-Prabin","-Kevin Kruse","-Napoleon Hill","-Albert Einstein","-Robert Frost","-Florence Nightingale","-Wayne Gretzky","-Christopher Columb","-Michael Jordan","-Chinese Proverb","-Stephen Covey"]
    var rdn= Math.floor(Math.random()*(quote.length));
    randomQuote=quote[rdn];
    var randomAuthor=author[rdn];
    $(".quotes").text(randomQuote);
    $(".author").text(randomAuthor);

  }
  $("#getMessage").on("click ",function(){
    getQuote();
  });
  $("#tweet").on("click ",function(){
    window.open("https://twitter.com/intent/tweet/?text="+randomQuote);
  });
});
