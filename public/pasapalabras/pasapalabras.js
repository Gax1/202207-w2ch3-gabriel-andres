/* eslint-disable no-alert */
/* eslint-disable no-console */
const questions1 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question: "CON LA A. Dicho de un extraterrestre, 'secuestrar a alguien'",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego de azar en el que cada participante compra uno o más cartones con unos números impresos",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, muchacho",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Evacuación intestinal de heces flojas y líquidas tres o más veces al día.",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Parte externa del citoplasma de algunas células de aspecto más fluido; es evidente en los protozoos",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question:
      "CON LA F. Que se entiende, hace o consigue con poco esfuerzo, habilidad o inteligencia.",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Agrupación de estrellas, cuerpos celestes y materia cósmica que está concentrada en una determinada región del espacio por efecto de la atracción gravitatoria.",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question:
      "CON LA H. Suicidio ritual de origen japonés que se realiza por razones de honor y consiste en abrirse el vientre con un arma blanca.",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question:
      "CON LA I. Estado eclesiástico, que comprende a todos los ordenados.",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Mamífero paquidermo de la familia del cerdo con dos colmillos curvos que le sobresalen de la boca.",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Avión suicida del ejército japonés que en la Segunda Guerra Mundial.",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Que está afectado de licantropía.",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question: "CON LA M. Que revela misantropía o da muestras de ella.",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Dicho o hecho propios de la persona necia.",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Marca que se pone o hay en las cosas para distinguirlas de otras.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Ser humanoide, de aspecto desagradable y actitud agresiva.",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question: "CON LA P. Una de las tres razas del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question: "CON LA Q. Producto lacteo obtenido de la maduracion de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    status: 0,
    question: "CON LA R. Animal utilizado ampliamente en estudios cientificos",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question:
      "CON LA S. Comunidad de desarrolladores informaticos muy conocida",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question: "CON LA T. Hasta la vista, Baby",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español autor del libro `Abel Sanchez`",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. De los pueblos navegantes escandinavos que aterrorizo europa en la edad media",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Conjunto de dos o más rebanadas de pan, normalmente de molde, entre las que se ponen distintos alimentos.",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question:
      "CONTIENE LA X. Droga hecha de una toxina producida por la bacteria Clostridium botulinum",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Planta cactácea, de pequeño tamaño, que contiene una sustancia cuya ingestión produce efectos alucinógenos y narcóticos.",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela budista que tiende a alcanzar la iluminación espiritual mediante la meditación que no se somete al conocimiento intelectual y a sus conceptos.",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego en el que los participantes disponen de cartones con números , que van marcando según coinciden con los que salen de un bombo u otro recipiente semejante.",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question:
      "CON LA C. Dicho popular en España para referirce a niño o joven.",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Síntoma o fenómeno morboso que consiste en evacuaciones de vientre líquidas y frecuentes.",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Sustancia blanca y vaporosa que un médium emite por la boca, en determinadas circunstancias.",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que se adapta con flexibilidad a las circunstancias..",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas , polvo interestelar , gases y partículas , que constituye un sistema autónomo dentro del universo.",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question:
      "CON LA H. Accion proveniente del Bushido japones, forma de suicidio ritual.",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question:
      "CON LA I. Lugar de reunion del clero cristiano, sitio donde se realizan las misas.",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Compañero de aventuras de Timon en la famosa pelicula de Disney de leones.",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question: "CON LA K. Persona que lleva a cabo un atentado suicida.",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question:
      "CON LA L. Persona que, según la tradición popular, se convierte en lobo las noches de plenilunio.",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question: "CON LA M. Persona que odia a otras personas.",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Cualidad de necio.",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Aviso que se comunica o se da , de cualquier modo que sea , para concurrir a un lugar determinado o para ejecutar otra cosa.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question: "CON LA O. Los soldados de Sauron en el Señor de los Anillos.",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question: "CON LA P. Raza mas desarrollada en el universo de Starcraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question: "CON LA Q. Alimento que va sobre la pizza",
  },
  {
    letter: "r",
    answer: "raton",
    status: 0,
    question:
      "CON LA R. Mamífero roedor de pequeño tamaño , de hocico puntiagudo y cola larga, de pelaje corto.",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question:
      "CON LA S. Pagina web de desarrolladores informaticos muy conocida",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question: "CON LA T. Pelicula de James Cameron con Arnold Schwarzenegger",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question: "CON LA U. Escritor y filósofo español",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Guerreros nordicos, cuyo dios mas importante en es Odin",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Conjuntos de alimentos entre dos rebanadas de pan",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question:
      "CONTIENE LA X. Sustancia altamente toxica que se utiliza en el mercado de la belleza",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Planta cactácea, motivo de investigacion de Carlos Castaneda que lo llevo a conocer al Chaman Juan Matus.",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question: "CON LA Z. Escuela budista muy popular en Japon.",
  },
];

const ranking = [
  { name: `Gabriel`, points: 27 },
  { name: `Natalia`, points: 20 },
];

const welcome = () => {
  let player = prompt(`Bienvenido al Pasalabra, cual es tu Nombre?`);
  while (!player || player === " " || Number(player)) {
    player = prompt(`Por favor introduci tu nombre correctamente!`);
  }
  console.log(
    `Bienvenido ${player}, por cada palabra acertada tendras un punto! Mucha suerte!`
  );
  return player;
};

const randomQuestion = () => {
  const randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
  let questionsOfGame;
  switch (randomNumber) {
    case 1:
      questionsOfGame = questions1.slice();
      break;
    case 2:
      questionsOfGame = questions2.slice();
      break;
    case 3:
      questionsOfGame = questions3.slice();
      break;
    default:
  }
  return questionsOfGame;
};

const showQuestions = (preguntas) => {
  let preguntasList = preguntas;
  const correctAnwser = [];
  while (preguntasList.length > 0) {
    for (const palabra of preguntasList) {
      console.log(palabra.question);
      let respuesta = prompt(
        `Por favor indique la palabra con la letra ${palabra.letter}, "Pasapalabra" para pasar a la siguiente letra o "End" si quieres terminar el juego`
      );
      while (!respuesta || respuesta === " " || Number(respuesta)) {
        respuesta = prompt(
          `Indique una palabra, "pasapalabra" para mostrar la siguiente letra o "end" para terminar`
        );
      }
      if (respuesta.toLowerCase() === "end") {
        return [correctAnwser.length, 0];
      }
      if (respuesta.toLowerCase() === palabra.answer) {
        palabra.status = 1;
        correctAnwser.push(palabra);
        preguntasList = preguntasList.filter((estado) => estado.status !== 1);
        console.log("Palabra correcta!! Felicitaciones");
      } else if (respuesta.toLowerCase() === "pasapalabra") {
        console.log("Has elegido pasapalabra");
      } else {
        console.log(
          `La palabra correcta era ${palabra.answer}, sigamos con la siguiente`
        );
        palabra.status = 2;
        preguntasList = preguntasList.filter((estado) => estado.status !== 2);
      }
    }
    if (preguntasList.length > 0) {
      window.alert(
        `Vas a empezar una nueva ronda! Te quedan ${preguntasList.length} por responder!`
      );
    }
  }
  return [correctAnwser.length, 1];
};
const goodbye = () => {
  console.log(`Gracias por jugar al pasapalabra!`);
};

const rankingPush = (jugador, puntos) => {
  ranking.push({
    name: jugador,
    points: puntos,
  });
  ranking.sort((a, b) => a.points - b.points);
  ranking.reverse();
};

const jugar = () => {
  const playerName = welcome();
  const preguntasDelJuego = randomQuestion();
  const playerPoints = showQuestions(preguntasDelJuego);
  if (playerPoints[1] === 0) {
    console.log(
      `Has acertado ${playerPoints[0]} palabras, gracias por jugar!}`
    );
  } else {
    rankingPush(playerName, playerPoints[0]);
    console.log(
      `Has completado el pasalabras!!!! Tus puntos son ${playerPoints[0]}`
    );
    console.table(ranking);
  }
  goodbye();
};
jugar();
