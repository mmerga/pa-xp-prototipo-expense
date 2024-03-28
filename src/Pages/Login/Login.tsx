import React from "react";
import './Login.css'

import MainBanner from "../../Components/MainBanner/MainBanner.tsx";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className="Login">
            <div className="banner-wrapper">
                <MainBanner/>
            </div>
                
            <div className="login-text-wrapper">
                <div>
                    <p>Bem Vindo!</p>
                    <p>Faça login para acessar sua conta.</p>

                    <div id="floatingInput">
                        <div  className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Número da conta ou CPF</label>
                        </div>
                    </div>

                    <div className="toogle-wrapper">
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lembrar meus dados</label>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>

                <div className="login-button-wrapper">
                    <div>
                        <p>
                            <Link
                                to='/faccount'
                                relative="path">
                                Esqueci minha conta.
                            </Link>
                        </p>
                        <p>
                            <Link
                                to='/register'
                                relative="path">
                                Não possui conta?
                            </Link>
                        </p>
                    </div>
                    <div>
                        <PrimaryButton text="Continuar" click={'/'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}