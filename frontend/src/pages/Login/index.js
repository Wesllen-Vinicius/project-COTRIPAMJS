import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [unidade, setUnidade] = useState("");
  const [unidades, setUnidades] = useState([]);
  const [check, setCheck] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/api/unidades").then((response) => {
      setUnidades(response.data);
    });
  }, []);

  function logar() {
    if (email === "" || senha === "") {
      setMensagem("Usuário/senha não informados!!");
    } else if (check === true) {
      axios
        .post("http://localhost:3001/api/login/admin", {
          nome: email,
          senha: senha,
        })
        .then((response) => {
          setMensagem(response.data.message);
          if (response.data.message === "Logado!") {
            dispatch({
              type: "LOG_IN_ADMIN",
              usuarioEmail: email,
            });
            history.push("/Encarregado");
          }
        });
    } else {
      axios
        .post("http://localhost:3001/api/encarregados", {
          nome: email,
          senha: senha,
          unidade_enc: unidade,
        })
        .then((response) => {
          setMensagem(response.data.message);
          if (response.data.message === "Logado!") {
            dispatch({
              type: "LOG_IN",
              usuarioEmail: email,
              usuarioUnidade: unidade,
            });
            history.push("/Encarregado");
          }
        });
    }
  }

  return (
    <div class="backgroud">
      <div class="wrapper fadeInDown">
        {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) >
        0 ? (
          <Redirect to="/Encarregado" />
        ) : null}
        <div id="formContent">
          <div class="fadeIn first"></div>
          <div class="col-12 row">
            <div class="esquerda col-6">
              <img class="img" />
            </div>
            <div class="direita col-6">
              <div class="form-login mt-5">
                <form>
                  <input
                    type="email"
                    id="Login"
                    class="fadeIn second Caixa input"
                    name="login"
                    placeholder="Usuario"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    id="Senha"
                    class="fadeIn third Caixa input"
                    name="senha"
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <div class="col-md-12 col-sm-12  select_login">
                    <select
                      value={unidade}
                      class="form-select"
                      onChange={(e) => setUnidade(e.target.value)}
                    >
                      <option selected value="">
                        Selecione a unidade
                      </option>
                      {unidades.map((val, index) => {
                        return (
                          <option value={val.id} key={index}>
                            {val.nome_unidade}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <input
                    type="button"
                    class="fadeIn fourth button mt-2"
                    value="Logar"
                    onClick={logar}
                  />
                  <div class=" form-switch">
                    <input
                      class="form-check-input me-2 mb-3 "
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onChange={(e) => setCheck(e.target.checked)}
                    />
                    <label
                      class="form-check-label "
                      for="flexSwitchCheckDefault"
                    >
                      Logar como ADM
                    </label>
                  </div>
                </form>
                <div id="formFooter">
                  {mensagem !== "" ? (
                    <div class=" menssagem" role="alert">
                      <svg
                        class="bi flex-shrink-0 me-2"
                        width="24"
                        height="30"
                        role="img"
                        aria-label="Danger:"
                      >
                        <FaExclamationTriangle size={20} color="red" />
                      </svg>
                      <div>
                        <p>{mensagem}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
