'use client';
import { useState } from "react";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import "./BodyLogin.css";

const Login = () => {
    const [values, setValues] = useState({
      email: "",
      senha: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Insira um endereço de email válido!",
        label: "",
        required: true,
      },
      {
        id: 2,
        name: "senha",
        type: "password",
        placeholder: "Senha",
        errorMessage:
          "Sua senha deve conter entre 8-20 caracteres e incluir pelo menos 1 letra, 1 número e 1 caractere especial!",
        label: "",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
    
      <div className="login">
        <div className="imagemLogin">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p>
            Não tem uma conta? Crie{" "}
            <Link 
            href='/Solicite'>aqui!</Link>
          </p>
          <button>
            <a href='/PagClie'>Entrar</a>
          </button>
        </form>
      </div>
    </div>  
    );
  };
  
  export default Login;