import { useState } from "react";
 
import "./css/CSSapp/App.css";
import img1 from "./css/imgs/1.png";
import img2 from "./css/imgs/2.png";
import img3 from "./css/imgs/3.png";

const imgs = [img1, img2, img3];

const emailok = "admin@gmail.com";
const senhaok = "1";

function App() {
  const [valor, setValor] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setValor(2);
    setIsFocused(true);
  }

  function handleBlur() {
    setValor(1);
    setIsFocused(false);
  }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  function login() {
    if(email == "" || senha == ""){
      alert("Preencha todos os campos") 
      return
    }

    if(email == emailok || senha == senhaok){
       window.location.href = "https://www.youtube.com/watch?v=C0FDlKVBAMg"
    }

    if (email != emailok) {
      alert("Email não consta no sistema");
      setEmail("");
      setSenha("");
      return
    }
    if(senha != senhaok){
      alert("Senha incorreta")
      setSenha("");
      return
    }
    
  }

  return (
    <>
       <div className="container">
        <div
          className="container-image-login"
          style={{ backgroundImage: `url(${imgs[valor - 1]})` }}
        ></div>
        <div className="container-2">
          <h1>Login</h1>
          <div className="container-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <div className="container-password">
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="senha"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={isFocused ? "focused" : ""}
              />
            </div>
            <button onClick={login}>Entrar</button>
            <p style={{fontSize: 10}}>Não tem cadastro? <a href="https://www.youtube.com/watch?v=Bci11SwLYhI">inscreva-se</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
