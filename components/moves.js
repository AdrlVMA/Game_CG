posicao_head_x = 0;
posicao_head_y = 0;

AFRAME.registerComponent('moves', {
    schema: {
        eixo_x: {type: 'number', default: 0},
        eixo_y: {type: 'number', default: 0},
        eixo_z: {type: 'number', default: 0},
        direcao: {type: 'string', default: 'D'},
        velocidade: {type: 'number', default: 0.05},
    },
    init: function () {
        this.data.eixo_x = -8;
        this.data.eixo_y = -8;
        this.data.eixo_z = 0;
        this.data.direcao = 'D';
        this.data.velocidade = 0.05;
    },
    tick: function () {
        this.keyboard();

        this.direction();

        this.boards();

        this.el.object3D.position.set(this.data.eixo_x, this.data.eixo_y, this.data.eixo_z);
    },
    keyboard: function () {
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
    },
    direction: function () {
        const {x, y} = this.el.object3D.position;

        if (this.data.direcao === 'W') {
            this.data.eixo_y += y < 9 ? this.data.velocidade : 0;
            
            if(this.data.eixo_y>=9){
                console.log("Deu ruim")
            }

            posicao_head_y = this.data.eixo_y;

        } else if (this.data.direcao === 'D') {
            this.data.eixo_x += x < 9 ? this.data.velocidade : 0;
        
            if(this.data.eixo_x>=9){
                console.log("Deu ruim")
            }
        
            posicao_head_x = this.data.eixo_x;

        } else if (this.data.direcao === 'A') {
            this.data.eixo_x -= x > -9 ? this.data.velocidade : 0;

            if(this.data.eixo_x<=-9){
                console.log("Deu ruim")
            }

            posicao_head_x = this.data.eixo_x;

        } else if (this.data.direcao === 'S') {
            this.data.eixo_y -= y > -9 ? this.data.velocidade : 0;
            
            if(this.data.eixo_y<=-9){
                console.log("Deu ruim")
            }

            posicao_head_y = this.data.eixo_y;

        }
    },
    boards: function () {
        if (this.data.eixo_x <= -9 || this.data.eixo_x >= 9) {
            alert("fim de jogo");
        }
        if (this.data.eixo_y <= -9 || this.data.eixo_y >= 9) {
            alert("fim de jogo");
        }
    }
});
