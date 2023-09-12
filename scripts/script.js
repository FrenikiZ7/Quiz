 //----------------------Função para abrir e fechar o menu hambúrguer----------------------
function openItens() {
  let menu = document.querySelector('.menu-itens-mobile')
  let menuDisplay = menu.style.display
  
  if (menuDisplay == 'flex') {
    menu.style.display = 'none'
    document.querySelector('img#menu-button-mobile').src = 'imgs/menu_white_36dp.svg'
  } 

  else {
    menu.style.display = 'flex'
    document.querySelector('img#menu-button-mobile').src = 'imgs/close_white_36dp.svg'
  }
}


//----------------------Variante com a quantia de erros da pessoa durante o Quiz---------------------
var errorCount = 0


//----------------------Função ativada quando o usuário clica em uma resposta errada---------------------
function wrongAnswer() {
  let userAnswer = document.querySelector('.answer-text')
  let audio = document.querySelector('audio#error')
  let audioCorrect = document.querySelector('audio#correct')
  let customBorder = document.querySelector('section#content')
  let remainingLifes = document.querySelector('h2.lifes')
  let nextQuestion = document.querySelector('input.next-question')
  let showExplanation = document.querySelector('div.explanation')
  
  //----------------------Utilizado quando o usuário já acertou a resposta, mas depois clica em uma resposta errada---------------------
  if (userAnswer.classList.contains('answer-correct')) {
    userAnswer.innerHTML = 'Você já acertou...Clicar ai não vai mudar nada<br>Agora avança pra próxima ai'
    audioCorrect.play()
  }

  //----------------------utilizado quando o usuário já errou a resposta, mas clica em outra resposta errada---------------------
  else if (userAnswer.classList.contains('answer-wrong')) {
    userAnswer.innerHTML = 'Resposta incorreta! <br> Avance para a próxima pergunta!'
    audio.play()
  }
  
  //----------------------utilizado quando o usuário clica em uma resposta errada pela primeira vez---------------------
  else {
    nextQuestion.style.display = 'block'
    userAnswer.classList.remove('answer-correct')
    userAnswer.classList.add('answer-wrong') 
    customBorder.style.border = '3px solid red'
    userAnswer.innerHTML = 'Resposta incorreta!'

    //----------------------Mostra a alternativa correta junto com a explicação---------------------
    showExplanation.style.display = 'block'

    //----------------------Altera o contador de erros na tela---------------------
    errorCount++
    remainingLifes.innerHTML = `Quantia de erros: ${errorCount}`

    audio.play()
  }
}

//----------------------Função ativada quando o usuário clica em uma resposta correta---------------------
function correctAnswer() {
  let userAnswer = document.querySelector('.answer-text')
  let audio = document.querySelector('audio#correct')
  let audioWrong = document.querySelector('audio#error')
  let customBorder = document.querySelector('section#content')

  let nextQuestion = document.querySelector('input.next-question')

  //----------------------utilizado quando o usuário já errou a resposta, mas clica na resposta correta---------------------
  if (userAnswer.classList.contains('answer-wrong')) {
    userAnswer.innerHTML = 'Resposta correta! <br> porém você já tinha errado, então avance para a próxima pergunta!'
    audioWrong.play()
  }

  //----------------------utilizado quando o usuário já acertou a resposta, mas clica novamente na resposta correta---------------------
  else if (userAnswer.classList.contains('answer-correct')) {
    userAnswer.innerHTML = 'Resposta correta! <br> Avance para a próxima pergunta!'
    audio.play()
  }
    
  //----------------------utilizado quando o usuário clica na resposta correta pela primeira vez---------------------
  else {
    userAnswer.classList.remove('answer-wrong')
    userAnswer.classList.add('answer-correct') 
      
    customBorder.style.border = '3px solid green'

    userAnswer.innerHTML = 'Resposta correta!'
    nextQuestion.style.display = 'block'
    audio.play()
  }
}


//----------------------Função ativada quando o usuário clica para ir para a próxima pergunta---------------------
function nextQuestion() {
  
  let ShowQuestion = document.querySelector('.questions-hide')
  let hideQuestion = document.querySelector('.questions')

  let audio = document.querySelector('audio#next')
  let button =  document.querySelector('input.next-question')
  let customBorder = document.querySelector('section#content')
  let userAnswer = document.querySelector('.answer-text')
  let hideExplanation = document.querySelector('div.explanation')

  //----------------------Utilizado para tornar a questão anterior invisível para o usuário---------------------
  hideQuestion.classList.remove('questions')
  hideQuestion.classList.add('questions-notshow')
  
  //----------------------Utilizado para tornar a questão atual visível para o usuário---------------------
  ShowQuestion.classList.remove('questions-hide')
  ShowQuestion.classList.add('questions')

  //----------------------Utilizado para resetar o Quiz e deixar o código pronto para a questão atual---------------------
  userAnswer.classList.remove('answer-correct')
  userAnswer.classList.remove('answer-wrong')
  
  customBorder.style.border = '3px solid white'
  button.style.display = 'none'
  userAnswer.innerHTML = ''

  hideExplanation.innerHTML = ''
  hideExplanation.classList.remove('explanation')
  hideExplanation.classList.add('explanation-hide')

  audio.play()
 }

//----------------------Função ativada quando o usuário clica para iniciar o Quiz---------------------
function startQuiz() {
  let content = document.querySelector('section#content') 
  let menu = document.querySelector('div#menu-quiz')
  let audio = document.querySelector('audio#next')

  
  content.style.display = 'flex'

  menu.style.display = 'none'
  audio.play()
}
