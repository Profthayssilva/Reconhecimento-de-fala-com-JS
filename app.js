constcaixaTexto = document.getElementById('texto-transcrito');
constbotaoTranscricao = document.getElementById('transcrever');
const reconhecimento = new webkitSpeeachRecognition();

reconhecimento.onresult = (evento) => {
    const transcricao = evento.resultx [0][0]. trascript;
    caixaTexto.innerText = transcricao;
};

botaoTranscricao.addEventListener('click', () => reconhecimento.start());