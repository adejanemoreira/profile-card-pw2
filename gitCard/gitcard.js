const usuario = document.querySelector("#usuario-github")
const botao = document.querySelector("#buscar-github")

let link = document.querySelector(".avatar")
let avatar = document.querySelector(".avatar img")
let nome = document.querySelector(".content h1")
let repositorio = document.querySelector("#repo-num")
let repositorioLink = document.querySelector("#link-repo")
let gist = document.querySelector("#gist-num")
let gistLink = document.querySelector("#link-gist")
let seguidores = document.querySelector("#segui-num")
let seguidoresLink = document.querySelector("#link-segui")

const getGitHubInfo = function (usuario) {
    var url = 'https://api.github.com/users/' + usuario;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            nome.innerText = ajax.name
            avatar.src = ajax.avatar_url
            link.href = ajax.html_url
            repositorio.innerText = ajax.public_repos
            repositorioLink.href = ajax.repos_url
            gist.innerText = ajax.public_gists
            gistLink.href = ajax.url
            seguidores.innerText = ajax.followers
            seguidoresLink.href = ajax.followers_url
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

const funcao = function(e){
    e.preventDefault()
    getGitHubInfo(usuario.value)
}

botao.addEventListener("click", funcao)
