position_head_x = 0;
position_head_y = 0;

let velocidade = 0.05;

let bateu = false;
let game_over = false;

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
        this.data.velocidade = velocidade;
        this.data.level2 = false;
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
            this.data.eixo_y += y < 9 ? velocidade : 0;
        } else if (this.data.direcao === 'D') {
            this.data.eixo_x += x < 9 ? velocidade : 0;
        } else if (this.data.direcao === 'A') {
            this.data.eixo_x -= x > -9 ? velocidade : 0;
        } else if (this.data.direcao === 'S') {
            this.data.eixo_y -= y > -9 ? velocidade : 0;
        }
        position_head_x = this.data.eixo_x;
        position_head_y = this.data.eixo_y;

        if (pontuacao >= pontos_level && !this.data.level2) {
            this.data.eixo_x = -8;
            this.data.eixo_y = -8;
            this.data.direcao = 'D';
            alert("Parabens! Level 2 atingido. Clique Ok para continuar.");
            this.data.level2 = true;
        }
    },
    boards: function () {
        if (this.data.eixo_x <= -9 || this.data.eixo_x >= 9) {
            bateu = true;
            velocidade = 0;
        }
        if (this.data.eixo_y <= -9 || this.data.eixo_y >= 9) {
            bateu = true;
            velocidade = 0;
        }

        this.level();

        if (bateu && !this.game_over) {
            var entity = document.querySelector('[sound]');
            entity.components.sound.playSound();
            alert("Game over. Voce fez " + pontuacao + " pontos.");
            this.game_over = true;
            location.reload();
        }

    },
    level: function () {
        let range_muro = 0.4;
        if (pontuacao >= pontos_level) {
            if (lvl2_muro_1(this.data.eixo_x, this.data.eixo_y, range_muro)) {
                bateu = true;
                velocidade = 0;
                var entity = document.querySelector('[sound]');
                entity.components.sound.playSound();
            }
            if (lvl2_muro_2(this.data.eixo_x, this.data.eixo_y, range_muro)) {
                bateu = true;
                velocidade = 0;
                var entity = document.querySelector('[sound]');
                entity.components.sound.playSound();
            }
            if (lvl2_muro_3(this.data.eixo_x, this.data.eixo_y, range_muro)) {
                bateu = true;
                var entity = document.querySelector('[sound]');
                entity.components.sound.playSound();
                velocidade = 0;
            }
        }
    }
});

lvl2_muro_1 = (eixo_x, eixo_y, range_muro = 0.4) => {
    if (eixo_y <= 5 + range_muro && eixo_y >= 5 - range_muro &&
        eixo_x >= -5 - range_muro && eixo_x <= 5 + range_muro) {
        return true;
    }
    return false;
};

lvl2_muro_2 = (eixo_x, eixo_y, range_muro = 0.4) => {
    if (eixo_y <= 3.5 + range_muro && eixo_y >= -3.5 - range_muro &&
        eixo_x >= -0.5 - range_muro && eixo_x <= 0.5 + range_muro) {
        return true;
    }
    return false;
};

lvl2_muro_3 = (eixo_x, eixo_y, range_muro = 0.4) => {
    if (eixo_y <= -7 + range_muro && eixo_y >= -7 - range_muro &&
        eixo_x >= -5 - range_muro && eixo_x <= 5 + range_muro) {
        return true;
    }
    return false;
};
