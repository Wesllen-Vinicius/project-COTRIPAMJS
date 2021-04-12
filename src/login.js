import React from "react";
import "./login.css";
const Login = () => ( 
    <div class="wrapper fadeInDown">
    <div id="formContent">
    <div class="fadeIn first">
    <img src="https://cdn.icon-icons.com/icons2/2897/PNG/512/flying_rocket_icon_182907.png" id="icon" alt="User Icon" size={20} />
    </div>
    <form>
      <input type="text" id="Login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="Senha" class="fadeIn third" name="senha" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>
    <div id="formFooter">
    </div>
  </div>
</div>
);
export default Login;