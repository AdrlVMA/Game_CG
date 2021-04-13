var posicao_x = [];
var posicao_y = [];

var teste_1 = false;
var range = 0.2;

AFRAME.registerComponent('comida_1', {
    schema: {
        eixo_x_1: {type: 'number', default: 0},
        eixo_y_1: {type: 'number', default: 0},
        eixo_z_1: {type: 'number', default: 0},
    },
    init: function () {
        this.data.eixo_x_1 = Math.random()*4;
        this.data.eixo_y_1 = Math.random()*4;
        this.data.eixo_z_1 = 0;
    },
    tick: function () {
        const {x, y} = this.el.object3D.position;

        if(!teste_1)
        this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, this.data.eixo_z_1);

        //console.log("head x:" + posicao_head_x);
        //console.log("head y:" + posicao_head_y);
        
        if(posicao_head_x<=this.data.eixo_x_1+range && posicao_head_y<=this.data.eixo_y_1+range && posicao_head_x>=this.data.eixo_x_1-range && posicao_head_y>=this.data.eixo_y_1-range){
            this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, -2);
            console.log("Colidiu");
            teste_1 = true;

            this.data.eixo_x_1 = ((Math.random()*9 + (-9)));
            this.data.eixo_y_1 = ((Math.random()*9 + (-9)));
            this.data.eixo_z_1 = 0;

            teste_1 = false;

        }
    }
});
