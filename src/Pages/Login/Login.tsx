import React, { useState } from "react";
import './Login.css'

import MainBanner from "../../Components/MainBanner/MainBanner.tsx";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";
import { Link } from "react-router-dom";

export default function Login() {
    const [isShow, setIsShow] = useState(true);
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(prev=>{
            if(e.target.value.length >= 8){
                setButtonDisabled(false)
            } else {
                setButtonDisabled(true)
            }
            return e.target.value
        });
    }

    function handleClickConfirm() {
        setIsShow(false)
    }

    const firstPart = 
    <>
        <div>
            <p>Bem vindo!</p>
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
                <label onClick={handleClickConfirm}><PrimaryButton text="Continuar"/></label>
            </div>
        </div>
    </>

    const secondPart =
    <>
        <div>
            <p>Bem vindo, Guilherme!</p>
            <p>Digite sua senha ou acesse com touch ID.</p>

            <div id="floatingInput">
                <div  className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Senha" onChange={handlePasswordChange} value={password}/>
                    <label htmlFor="floatingInput">Senha</label>
                </div>
            </div>
            {buttonDisabled && password.length > 0 &&<label className="error-message">A senha deve ter pelo menos 8 caracteres.</label>}

        </div>

        <div className="login-button-wrapper">
            <div>
                <p>
                    <Link
                        to='/fpassword'
                        relative="path">
                        Esqueci minha senha.
                    </Link>
                </p>
            </div>
            <div>
                <label ><PrimaryButton text="Acessar com a senha" isDisabled={buttonDisabled}/></label>
                <label ><PrimaryButton text="Acessar com Touch ID"/></label>
            </div>
        </div>
    </>

    return (
        <div className="Login">
            <div className="banner-wrapper">
                <MainBanner/>
            </div>
                
            <div className="login-text-wrapper">
                {isShow ? firstPart : secondPart}
            </div>
        </div>
    )
}