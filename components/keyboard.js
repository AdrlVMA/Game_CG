AFRAME.registerComponent('keyboard', {
    schema: {
        eixo_x: {type: 'number', default: 0},
        eixo_y: {type: 'number', default: 0},
        eixo_z: {type: 'number', default: 0},
    },
    init: function () {
        this.data.eixo_x = -8;
        this.data.eixo_y = -9;
        this.data.eixo_z = 0;
    },
    tick: function () {
        document.onkeypress = (event) => {
            if (event.charCode === 97) { // Letra A
                this.data.eixo_x -= 1;
            }
            if (event.charCode === 115) { // Letra S
                this.data.eixo_y -= 1;
            }
            if (event.charCode === 100) { // Letra D
                this.data.eixo_x += 1;
            }
            if (event.charCode === 119) { // Letra W
                this.data.eixo_y += 1;
            }
        };
        this.el.object3D.position.set(this.data.eixo_x, this.data.eixo_y, this.data.eixo_z);
    }
});
