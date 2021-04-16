range_muro = 0.01;

AFRAME.registerComponent('muros_level', {
    init: function () {
        this.eixo_x_muro_1 = 5;
        this.eixo_y_muro_1 = 5;
        this.el.object3D.position.z = -2;
    },
    tick: function () {
        if (pontuacao >= pontos_level) {
            this.el.object3D.position.z = 0;
        }
        if (position_head_x <= this.eixo_x_muro_1 + range_muro && position_head_y <= this.eixo_y_muro_1 + range_muro
            && position_head_x >= this.eixo_x_muro_1 - range_muro && position_head_y >= this.eixo_y_muro_1 - range_muro) {

            bateu = true;
            game_over = false;
        }
    }
});
