const triviaQuestions = [
    {
      question: "¿En qué año me gradué?",
      options: ["2015", "2018", "2021", "2022"],
      correctAnswer: "2021"
    },
    {
      question: "¿Cuál es mi habilidad destacada?",
      options: ["Programación", "Diseño gráfico", "Gestión de proyectos", "Idiomas"],
      correctAnswer: "Programación"
    },
    {
        question: "¿En que año naci?",
        options: ["2001", "2005", "2003", "2000"],
        correctAnswer: "2003",
    },
    {
        question: "¿Que idiomas de programacion conozco?",
        options: ["javaScript", "phyton", "ruby", "todas son correctas"],
        correctAnswer: "todas son correctas",
    },
    // Agrega más preguntas según sea necesario
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;
  
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => selectAnswer(button);
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedButton) {
    // Elimina la clase 'selected' de todos los botones
    const options = document.querySelectorAll(".options button");
    options.forEach(option => option.classList.remove("selected"));
  
    // Agrega la clase 'selected' al botón seleccionado
    selectedButton.classList.add("selected");
  
    // Puedes hacer más cosas aquí, como registrar respuestas o mostrar retroalimentación
    console.log(`Seleccionaste: ${selectedButton.innerText}`);
  }
  
  function checkAnswer() {
    const selectedButton = document.querySelector(".options button.selected");
    if (selectedButton) {
      const answer = selectedButton.innerText;
      const correctAnswer = triviaQuestions[currentQuestionIndex].correctAnswer;
  
      if (answer === correctAnswer) {
        alert("¡Correcto!");
      } else {
        alert(`Incorrecto. La respuesta correcta es: ${correctAnswer}`);
      }
  
      // Avanzar a la siguiente pregunta
      currentQuestionIndex++;
      if (currentQuestionIndex < triviaQuestions.length) {
        displayQuestion();
      } else {
        alert("Has completado la trivia. ¡Gracias por participar!");
      }
    } else {
      alert("Selecciona una opción antes de responder.");
    }
  }
  
  // Mostrar la primera pregunta al cargar la página
  displayQuestion();
  