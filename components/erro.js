AFRAME.registerComponent('erro', {
    schema: {
        eixo_x_1: {type: 'number', default: -3},
        eixo_y_1: {type: 'number', default: 0.5},
        eixo_z_1: {type: 'number', default: -3},
    },
    init: function () {
        this.data.eixo_x_1 = -3;
        this.data.eixo_y_1 = 0.5;
        this.data.eixo_z_1 = -3;
    },
    tick: function () {
        const {x, y} = this.el.object3D.position;

        if(bateu)
            this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, -3);

        this.el.object3D.position.set(this.data.eixo_x_1, this.data.eixo_y_1, 0);
                
    }
});