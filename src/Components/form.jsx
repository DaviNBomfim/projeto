import React from "react";
import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react";
import './form.css'

const Formulario = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (Event) => {
        event.preventDefault();
        console.log(userName, password);
    };

    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="field">
                    <h1>E-mail</h1>
                    <input type="email" placeholder="Email@gmail.com"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

                <div className="field">
                    <h1>Senha</h1>
                    <input type="password" placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>


                <div className="Recal">
                    <label>
                        <input type="checkbox" />Lembrar de mim
                    </label>
                    <a href="#" alt="senha">Esqueceu sua senha?</a>
                </div>
                
                <button>Entrar</button>

                <div className="Registre">
                    <a href="#" alt="registro">Cadastre-se</a>
                </div>

            </form>

        </div>
    )
}

export default Formulario;