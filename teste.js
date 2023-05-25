const formulario = document.querySelector("form")
const inputs = formulario.querySelectorAll("form input")

function validacao() {
	const nome = formulario.nome.value.trim()
	const senha = formulario.senha.value
	const repetir_senha = formulario.repetir_senha.value
	const email = formulario.email.value
	const bairro = formulario.bairro.value
	const numero = formulario.numero.value
	const complemento = formulario.complemento.value
	const cidade = formulario.cidade.value
	// validação dos inputs
	if (nome.trim() === "") {
		throw new Error("Preencha o nome")
	} else if (senha.trim() === "") {
		throw new Error("Preencha a senha")
	} else if (complemento.trim() === "") {
		throw new Error("Preencha o complemento")
	} else if (email.trim() === "") {
		throw new Error("Preencha o email")
	} else if (repetir_senha.trim() === "" || senha.trim() === "" || senha.trim().length < 8) {
		throw new Error("A senha deve ter conter o minímo 8 caracteres")
	} else if (repetir_senha !== senha) {
		throw new Error("As senhas não estão iguais")
	} else if (numero.trim() === "") {
		throw new Error("Preencha o número")
	} else if (cidade.trim() === "") {
		throw new Error("Preencha a cidade")
	} else if (bairro.trim() === "") {
		throw new Error("Preencha o bairro")
	}
}
// Evento do submit do formulário
formulario.addEventListener("submit", (evento) => {
	inputs.forEach((input) => {
		if (!input.value) {
			console.log("pegando a cor")
			input.classList.add("invalido")
			evento.preventDefault();
		} else {
			console.log("removendo a cor")
			input.classList.remove("invalido")
		}
	})
	try {
		validacao()
		console.log("Cadastrado com sucesso!")
		return true
	} catch (erro) {
		evento.preventDefault()
		console.log("erro")
		alert(erro.message)
		return false
	}
})

const btnVoltar = document.getElementById("btnVoltar")
btnVoltar.addEventListener("click", ()=>{
	window.location.href="index.html"
})