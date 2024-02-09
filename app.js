// Obtém uma referência ao elemento HTML com o id 'texto-transcrito'
const caixaTexto = document.getElementById('texto-transcrito');
// Obtém uma referência ao elemento HTML com o id 'transcrever'
const botaoTranscricao = document.getElementById('transcrever');
// Cria uma nova instância de webkitSpeechRecognition para reconhecimento de fala
const reconhecimento = new webkitSpeechRecognition();

// Define um manipulador de eventos para o evento 'result' do reconhecimento de fala
reconhecimento.onresult = (evento) => {
    // Obtém a transcrição da fala a partir dos resultados do reconhecimento
    const transcricao = evento.results[0][0].transcript;
    // Define o texto da caixa de texto com a transcrição obtida
    caixaTexto.innerText = transcricao;
};

// Adiciona um ouvinte de evento ao botão de transcrição para iniciar o reconhecimento de fala
botaoTranscricao.addEventListener('click', () => reconhecimento.start());
