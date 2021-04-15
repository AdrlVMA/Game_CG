
range_muro = 0.01;

AFRAME.registerComponent('muro_1', {
    schema: {
        eixo_x_muro_1: {type: 'number', default: 0},
        eixo_y_muro_1: {type: 'number', default: 0},
        eixo_z_muro_1: {type: 'number', default: 0},
    },
    init: function () {
        this.data.eixo_x_muro_1 = 0;
        this.data.eixo_y_muro_1 = 0;
        this.data.eixo_z_muro_1 = -4;
    },
    tick: function () {
        const {x, y} = this.el.object3D.position;

        if(pontuacao>5){
            this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, 0);
            if(position_head_x<=this.data.eixo_x_muro_1+range_muro && position_head_y<=this.data.eixo_y_muro_1+range_muro && position_head_x>=this.data.eixo_x_muro_1-range_muro && position_head_y>=this.data.eixo_y_muro_1-range_muro){
                bateu = true;
            }
        }else{
            this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, this.data.eixo_z_1);
        }

        
        
    }
});


/*
murros = [];

AFRAME.registerComponent('murro', {
    init: function () {
        this.data.pts_nivel = 2;
        this.insert();
    },
    tick: function () {
        if (pontuacao % this.data.pts_nivel === 0 && pontuacao > 0) {
            if (murros.length === 0 || pontuacao - murros.length * this.data.pts_nivel === 0) {
                this.insert();
            }
        }
    },
    insert: function () {
        const eixo_x = Math.random() * (8 - (-8)) - 8;
        const eixo_y = Math.random() * (8 - (-8)) - 8;
        const eixo_z = 3;

        this.el.object3D.position.set(eixo_x, eixo_y, eixo_z);

        murros.push({eixo_x, eixo_y, eixo_z});
    }
});

*/
