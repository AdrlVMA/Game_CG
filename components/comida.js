let colisao = false;
let pontuacao = 0;
let incremento = 0.01;

inf_value = -8;
max_value = 8;

AFRAME.registerComponent('comida_1', {
    schema: {
        eixo_x_1: {type: 'number', default: 0},
        eixo_y_1: {type: 'number', default: 0},
        eixo_z_1: {type: 'number', default: 0},
    },
    random_position: function () {
        this.data.eixo_x_1 = Math.random() * (max_value - inf_value) + inf_value;
        this.data.eixo_y_1 = Math.random() * (max_value - inf_value) + inf_value;
        this.data.eixo_z_1 = 0;

        if (pontuacao >= pontos_level) {
            if (lvl2_muro_1(this.data.eixo_x_1, this.data.eixo_y_1)) {
                this.random_position();
            }
            if (lvl2_muro_2(this.data.eixo_x_1, this.data.eixo_y_1)) {
                this.random_position();
            }
            if (lvl2_muro_3(this.data.eixo_x_1, this.data.eixo_y_1)) {
                this.random_position();
            }
        }
    },
    init: function () {
        this.random_position();
        this.range = 0.2;
    },
    tick: function () {
        if (!colisao) {
            this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, this.data.eixo_z_1);
        }

        if (position_head_x <= this.data.eixo_x_1 + this.range && position_head_y <= this.data.eixo_y_1 + this.range
            && position_head_x >= this.data.eixo_x_1 - this.range
            && position_head_y >= this.data.eixo_y_1 - this.range) {

            this.random_position();

            velocidade += incremento;
            pontuacao += 1;
            colisao = true;

        } else {
            colisao = false;
        }
    }
});
