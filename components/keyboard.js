AFRAME.registerComponent('keyboard', {
    schema: {
        eixo_x: {type: 'number', default: 0},
        eixo_y: {type: 'number', default: 0},
        eixo_z: {type: 'number', default: 0},
        direcao: {type: 'string', default: 'D'},
        velocidade: {type: 'number', default: 0.05},
    },
    init: function () {
        this.data.eixo_x = -8;
        this.data.eixo_y = -9;
        this.data.eixo_z = 0;
        this.data.direcao = 'D';
        this.data.velocidade = 0.05;
    },
    tick: function () {
        document.onkeypress = (event) => {
            if (event.charCode === 97) { // Letra A
                this.data.direcao = 'A';
            }
            if (event.charCode === 115) { // Letra S
                this.data.direcao = 'S';
            }
            if (event.charCode === 100) { // Letra D
                this.data.direcao = 'D';
            }
            if (event.charCode === 119) { // Letra W
                this.data.direcao = 'W';
            }
        };
        if (this.data.direcao === 'W') {
            this.data.eixo_y += this.data.velocidade;
        } else if (this.data.direcao === 'D') {
            this.data.eixo_x += this.data.velocidade;
        } else if (this.data.direcao === 'A') {
            this.data.eixo_x -= this.data.velocidade;
        } else if (this.data.direcao === 'S') {
            this.data.eixo_y -= this.data.velocidade;
        }
        this.el.object3D.position.set(this.data.eixo_x, this.data.eixo_y, this.data.eixo_z);
    }
});
