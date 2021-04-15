AFRAME.registerComponent('update-text-every-second', {
init: function () {
    let el = this.el;

    setInterval(function () {
        el.setAttribute('value', "Score: " + pontuacao + " pontos");
    }, 10);
}
});

AFRAME.registerComponent('update-text-every-second2', {
  init: function () {
      var el = this.el;
      var i = 0;

      if(bateu){
        setInterval(function () {
        el.setAttribute('value', "Game Over");
        }, 10);}

  }
  });
