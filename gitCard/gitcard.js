const usuarioInput = document.querySelector("#usuario-github");
const buscarBotao = document.querySelector("#buscar-github");

const avatarLink = document.querySelector(".avatar");
const avatarImagem = document.querySelector(".avatar img");
const nomeUsuario = document.querySelector(".content h1");
const numeroRepositorios = document.querySelector("#repo-num");
const linkRepositorios = document.querySelector("#link-repo");
const numeroGists = document.querySelector("#gist-num");
const linkGists = document.querySelector("#link-gist");
const numeroSeguidores = document.querySelector("#segui-num");
const linkSeguidores = document.querySelector("#link-segui");

const obterInformacoesGitHub = usuario => {
  const url = `https://api.github.com/users/${usuario}`;

  const requisicaoAjax = new XMLHttpRequest();

  requisicaoAjax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const dados = JSON.parse(this.responseText);

      nomeUsuario.innerText = dados.name;
      avatarImagem.src = dados.avatar_url;
      avatarLink.href = dados.html_url;
      numeroRepositorios.innerText = dados.public_repos;
      linkRepositorios.href = dados.repos_url;
      numeroGists.innerText = dados.public_gists;
      linkGists.href = dados.url;
      numeroSeguidores.innerText = dados.followers;
      linkSeguidores.href = dados.followers_url;
    }
  };

  requisicaoAjax.open("GET", url, true);
  requisicaoAjax.send();
};

const buscarInformacoes = e => {
  e.preventDefault();
  obterInformacoesGitHub(usuarioInput.value);
};

buscarBotao.addEventListener("click", buscarInformacoes);

