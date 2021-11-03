// GOAL RESPOSTA CERTA - eu clico na resposta certa e aperece-me HTML e CSS dizer "Correcto"
// GOAL RESPOSTAS ERRADAS - eu clico na resposta errada e aperece-me HTML e CSS "Oops errada" + "algo especifico à resposta que eu clickei" + "tenta outra vez"

// GOAL RESPOSTA CERTA	

// 1. tenho que ir buscar a botão com a resposta correta

const respostaCerta = document.getElementById('resposta-certa');

// 1.2 tenho que ir buscar o <p> para onde eu quero injectar conteudo

const explicacao = document.getElementById('explicacao');

// 2. tenho que por o elemento resposta certa a escutar o meu 'click'

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correcto!</strong> 🥳";
})

// GOAL RESPOSTAS ERRADAS

// 1. tenho que ir buscar todas as respostas com a classe resposta-errada

const respostasErradas = document.querySelectorAll('.resposta-errada');

// 2. iterar por cada resposta errada

respostasErradas.forEach((resposta) => {
	// 3. JS estar à escuta do click em cada resposta
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Ops, errado....</strong> 😬"

		// 4. Distinguir que resposta é se é HTML, CSS ou Ruby
		if (resposta.id === "resposta-html") {
			explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo à nossa página." 
		} else if (resposta.id === "resposta-css") {
			explicacaoConteudo = explicacaoConteudo + " CSS permite-nos dar estilo à nossa página." 
		} else {
			explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser utilizada para backend."
		}

		explicacaoConteudo += " Tenta outra vez"

		explicacao.innerHTML = explicacaoConteudo;
	})
})