function criarEfeitoDinheiro(botao) {
    const simbolos = ['💰', '💵', '💴', '💶', '💷', '🪙', '💎'];
    const retangulo = botao.getBoundingClientRect();
    const centroX = retangulo.left + retangulo.width / 2;
    const topo = retangulo.top;

    for (let i = 0; i < 20; i++) {
        const elemento = document.createElement('div');
        elemento.className = 'money-effect';
        elemento.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        
        const inicioX = centroX + (Math.random() - 0.5) * 100;
        const inicioY = topo - 10;
        const duracao = Math.random() * 3000 + 2000;
        const atraso = Math.random() * 500;
        const fimX = inicioX + (Math.random() - 0.5) * 200;

        elemento.style.left = `${inicioX}px`;
        elemento.style.top = `${inicioY}px`;
        elemento.style.animation = `money-fall ${duracao}ms ${atraso}ms linear forwards`;
        elemento.style.transform = `translateX(${fimX - inicioX}px)`;

        document.body.appendChild(elemento);
        setTimeout(() => elemento.remove(), duracao + atraso);
    }
}