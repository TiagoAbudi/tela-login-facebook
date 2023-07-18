import './App.css';
import React from 'react';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUC1iXZWLI-CvC5Red7u4WS_r9ldgxBI",
  authDomain: "tiagoabudifacebook.firebaseapp.com",
  databaseURL: "https://tiagoabudifacebook-default-rtdb.firebaseio.com",
  projectId: "tiagoabudifacebook",
  storageBucket: "tiagoabudifacebook.appspot.com",
  messagingSenderId: "564219989349",
  appId: "1:564219989349:web:d0f21718b557174a7ce58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = props => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <div >
      <html lang="pt">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-sacale=1" />

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
          <title>Facebook</title>
        </head>
        <body>
          <section class="cont-itens wrapper">
            <div class="itens">
              <div class="cont-img-logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
              </div>
              <div class="cont-text">
                <p>
                  O Facebook ajuda você a se conectar e
                  <br />compartilhar com as pessoas que
                  <br />fazem parte da sua vida.
                </p>
              </div>
            </div>
            <div class="itens">
              <div class="cont-card">
                <div class="card-body">
                  <div class="cont-campos-login">
                    <form autocomplete="on">
                      <input
                        placeholder="Email ou telefone"
                        class="form-control mb-3 email"
                        type="email"
                        autocomplete="on"
                        autofocus="1"
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value)
                          console.log(e.target.value)
                        }} />
                      <input
                        placeholder="Senha"
                        class="form-control mb-3 senha"
                        type="password"
                        value={senha}
                        onChange={e => {
                          setSenha(e.target.value)
                          console.log(e.target.value)
                        }} />
                    </form>
                  </div>
                  <div class="cont-btn-entrar">
                    <button type="button" class="btn btn-primary mb-3">Entrar</button>
                    <a href="">Esqueceu a senha?</a>
                  </div>
                  <hr />
                  <div class="cont-nova-conta">
                    <button type="button" class="btn btn-primary">Criar nova conta</button>
                  </div>
                </div>
              </div>
              <div class="cont-criar-pagina">
                <p class="mt-3"><a href=""><b>Criar uma Página</b></a> para uma celebridade, uma marca ou uma
                  <br />empresa.
                </p>
              </div>
            </div>
          </section>

          <footer class="pt-4">
            <section class="wrapper">
              <a href=""><small>Português (Brasil)</small></a>
              <a href=""><small>English (US)</small></a>
              <a href=""><small>Español</small></a>
              <a href=""><small>Français (France)</small></a>
              <a href=""><small>Italiano</small></a>
              <a href=""><small>Deutsch</small></a>
              <a href=""><small>العربية</small></a>
              <a href=""><small>हिन्दी</small></a>
              <a href=""><small>中文(简体) 日本語</small></a>
              <hr />
              <a href=""><small>Cadastre-se</small></a>
              <a href=""><small>Entrar</small></a>
              <a href=""><small>Messenger</small></a>
              <a href=""><small>Facebook Lite</small></a>
              <a href=""><small>Watch</small></a>
              <a href=""><small>Pessoas</small></a>
              <a href=""><small>Páginas</small></a>
              <a href=""><small>Categorias de Páginas</small></a>
              <a href=""><small>Locais</small></a>
              <a href=""><small>Jogos</small></a>
              <a href=""><small>Locais</small></a>
              <a href=""><small>Marketplace</small></a>
              <a href=""><small>Facebook Pay</small></a>
              <a href=""><small>Grupos</small></a>
              <a href=""><small>Vagas de emprego</small></a>
              <a href=""><small>Oculus</small></a>
              <a href=""><small>Portal</small></a>
              <a href=""><small>Instagram</small></a>
              <a href=""><small>Local</small></a>
              <a href=""><small>Campanhas de arrecadação de fundos</small></a>
              <a href=""><small>Serviços</small></a>
              <a href=""><small>Central de Informações de Votação</small></a>
              <a href=""><small>Sobre</small></a>
              <a href=""><small>Criar anúncio</small></a>
              <a href=""><small>Criar Página</small></a>
              <a href=""><small>Desenvolvedores</small></a>
              <a href=""><small>Carreiras</small></a>
              <a href=""><small>Privacidade</small></a>
              <a href=""><small>Cookies</small></a>
              <a href=""><small>Escolhas para anúncios</small></a>
              <a href=""><small>Termos</small></a>
              <a href=""><small>Ajuda</small></a>
              <a href=""><small>Configurações</small></a>
              <a href=""><small>Registro de Atividades</small></a>
              <a href=""><small></small></a>
              <a href=""><small></small></a>
            </section>
          </footer>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossorigin="anonymous"></script>
        </body>

      </html>
    </div>
  );
}

export default App;
