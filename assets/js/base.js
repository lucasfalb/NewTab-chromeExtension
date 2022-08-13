window.onload = () => {
  const temas = [1, 2, 3];
  let tema = temas[Math.floor(Math.random() * temas.length)];
  let setTema = document.querySelectorAll(".tema");
  setTema.forEach(function (t) {
    t.classList.add(`tema0${tema}`);
  });
  switch (tema) {
    case 1:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      break;
    case 2:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      break;
    case 3:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      break;
  }

  function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    if (hor < 10) {
      hor = "0" + hor;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (seg < 10) {
      seg = "0" + seg;
    }
    var horas = hor + ":" + min + ":" + seg;
    document.getElementById("hora").innerHTML = horas;
    setInterval(relogio, 1000);
  }
  relogio()

  function data() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    document.querySelector('#data').innerHTML = today.toLocaleDateString();
  }
  data();
  document.querySelector("input")
    .addEventListener('change', (e) => {
      window.location.href = `https://www.google.com/search?q=${e.currentTarget.value}`
    });

  function fraseAleatoria() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang == "pt-BR") {
      const frases = [
        "Quem nunca aprendeu a obedecer jamais poderá se tornar um bom comandante",
        "Um soberano deve punir com cautela e recompensar prontamente.",
        "Enquanto visamos o próximo século, líderes serão aqueles que empoderarão outros.",
        "Liderança é a arte de fazer com que uma pessoa faça o que você quer porque ela quer fazer isso.",
        "A melhor escolha é liderar por trás e colocar outras pessoas na frente, especialmente quando você comemora as coisas boas que acontecem. Você toma a dianteira quando há perigo. Dessa forma, as pessoas vão apreciar sua liderança.",
        "O que você faz tem mais impacto do que o que você diz.",
        "Você não precisa de um título para agir como líder.",
        "O segredo para uma liderança bem sucedida atualmente é influência, e não autoridade.",
        "Se uma pessoa tiver sorte, uma fantasia solitária pode transformar um milhão de realidades.",
        "No quesito de estilo, vá com a correnteza. No quesito de princípios, fique firme como uma rocha.",
        "Lidere e inspire pessoas. Não tente manipular ou gerenciá-las. Inventários podem ser gerenciados, mas pessoas devem ser lideradas.",
        "Liderança e aprendizagem são indispensáveis uma para a outra.",
        "Nunca dê uma ordem que não possa ser obedecida.",
        "Ninguém é bom o suficiente para governar outra pessoa sem o consentimento desta.",
        "Fazer coisas grandiosas é difícil, mas comandar grandes feitos é ainda mais.",
        "Um líder covarde é um dos tipos de pessoas mais perigosas que há.",
        "O melhor dos líderes é aquele que as pessoas mal sabem que existe. Quando seu trabalho está feito e seu objetivo cumprido, as outras pessoas dirão: nós fizemos isso nós mesmas.",
        "Um líder é um comerciante de esperança.",
        "Minha definição de liderança é: a capacidade e a vontade de agrupar homens e mulheres em prol de um propósito comum e de uma pessoa capaz de inspirar confiança.",
        "O mito mais perigoso sobre liderança é que líderes nascem assim — que há um fator genético para a liderança. Isso é um absurdo; na verdade, o que acontece é o oposto. Líderes são criados ao invés de nascerem assim.",
        "Torne-se a liderança que você seguiria voluntariamente, mesmo sem título ou cargo.",
        "Uma excelente pessoa atrai outras excelentes pessoas e sabe como mantê-las em junção.",
        "A função de uma liderança é produzir mais líderes e não mais seguidores.",
        "Liderança é elevar a visão de uma pessoa para altos objetivos, aumentar a performance de uma pessoa para altos patamares e a construção de uma personalidade para além de suas limitações regulares.",
        "Liderança é a capacidade de traduzir visão em realidade.",
        "Uma boa liderança não é sobre fazer grandes falas ou ser amado, liderança é definida por resultados e não atributos.",
        "Qualquer um pode segurar o timão quando o mar está calmo.",
        "Não se define grandes líderes a partir da falta de fraquezas, mas sim a partir da presença de qualidades bem definidas.",
        "Não posso lhe dar a fórmula para o sucesso, mas eu posso dar a fórmula para o fracasso, que é: tente agradar todo mundo.",
        "Liderança é sobre resolver problemas. O dia em que soldados pararem de trazer problemas é o dia que você deixará de liderá-los. Isso será pois perderam a confiança na sua ajuda ou porque acreditam que você não liga. Ambos os casos são falhas de liderança.",
        "Não é o grasnar, mas sim o voo do pato selvagem que faz com que o bando alce voo para seguí-lo.",
        "Ganhe sua liderança dia após dia.",
        "Nunca diga para as pessoas como elas devem fazer algo. Diga o que elas precisam fazer e elas lhe surpreenderão com sua engenhosidade.",
        "O desafio da liderança é ser forte sem ser rude; ser dócil sem ser fraca; ser resiliente sem ser tirânica; ser compreensiva sem ser preguiçosa; ser humilde sem ser tímida; ser orgulhosa sem ser arrogante; ser bem humorada sem ser insensata.",
        "O líder deve ser prático e realista, ainda que deve saber dialogar com o visionário e com o idealista.",
        "Não siga por onde o caminho leva. Em vez disso, vá onde não há caminho e deixe uma trilha.",
        "Liderança é uma série de comportamentos e não um papel para heróis.",
        "Se o objetivo principal do capitão fosse preservar seu navio, ele o deixaria para sempre no porto.",
        "Inovação é o diferencial entre líder e seguidor.",
      ]
      let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      const frase = document.querySelector('#frase')
      frase.innerHTML = fraseAleatoria
    }else{
      const frase = document.querySelector('#frase')
      frase.remove();
    }
  }
  fraseAleatoria();
}