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
