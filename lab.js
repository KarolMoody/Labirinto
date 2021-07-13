console.log('Você acorda em um quarto estranho, sem saber como chegou lá.')
console.log('Depois de explorar o local, econtra um bilhete com seu nome.')
console.log('Nele está escrito que você está em um labirinto cheio de armadilhas e deve encontrar a saída.')
console.log('Você vai até a porta do quarto, abre-a e pode seguir para a direita ou para a esquerda.')

const caminhos = require('./caminhos')

const readline = require('readline-sync')

const entradaInicial = readline.question('Seguir para D/E')

if(entradaInicial.toLocaleUpperCase() === 'D'){
    console.table(caminhos[0])
    console.log('Game Over!')
} else{
    console.table(caminhos[1])
    const entrada2 = readline.question('Escolher A/B')
    if(entrada2.toLocaleUpperCase() === 'B'){
        console.table(caminhos[3])
        console.log('Game Over!')
    } else{
        console.table(caminhos[2])
        const entrada3 = readline.question('Ignorar ou abrir a porta? I/P')
        if(entrada3.toLocaleUpperCase() === 'I'){
            console.table(caminhos[4])
            console.log('Game Over!')
        } else{
            console.table(caminhos[5])
            const entrada4 = readline.question('Corredor 1/2')
            if(entrada4.toLocaleUpperCase() === '2'){
                console.table(caminhos[7])
                console.log('Game Over!')
            } else{
                console.table(caminhos[6])
                const entrada5 = readline.question('Subir ou descer? S/D')
                if(entrada5.toLocaleUpperCase() === 'S'){
                    console.table(caminhos[8])
                    console.log('Game Over!')
                } else{
                    console.table(caminhos[9])
                    const entrada6 = readline.question('Botão azul ou vermelho? A/V')
                    if(entrada6.toLocaleUpperCase() === 'A'){
                        console.table(caminhos[10])
                        console.log('Game Over!')
                    } else{
                        console.table(caminhos[11])
                        console.log('Parabéns, você escapou!')
                    }
                }
            }
        }
    }
}
