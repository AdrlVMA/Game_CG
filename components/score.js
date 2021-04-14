/*AFRAME.registerComponent('score-counter', {
    schema: {
      el: {
        type: 'selector'
      },
      score:{
        type: 'int',
        default: 0
      },
    },
  
    init: function () {
      var sceneEl = document.querySelector('a-scene'); 
      var scoreBoard = document.querySelector('#score');

      scoreBoard.setAttribute('text', 'value',  newScore)
  
      sceneEl.querySelector('a-text').addEventListener(() => {
        this.data.score++;
        var newScore = 'Score: ' + this.data.score
        scoreBoard.setAttribute('text', 'value',  newScore)
      })
    }
});*/
  
AFRAME.registerComponent('update-text-every-second', {
init: function () {
    var el = this.el;
    var i = 0;

    setInterval(function () {
    el.setAttribute('value', "Pontuacao: " + pontuacao);
    console.log("--")
    }, 10);
}
});