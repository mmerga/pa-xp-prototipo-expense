import React from "react";
import './Register.css'

import MainBanner from "../../Components/MainBanner/MainBanner.tsx";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";

export default function Register() {

    return (
        <div className="Register">
            <div className="register-banner-wrapper">
                <MainBanner />
            </div>
            <div className="register-text-wrapper">
                <div className="register-text">
                    <p>Olá. Que bom que você veio!</p>
                    <p>Você está a um passo da sua saúde financeira.</p>
                </div>
                <div className="register-button">
                    <div className="register-utilize-this-acess">
                        <p>Utilize esse acesso de você for cliente da <span>XP Investimentos</span></p>
                        <p>{'>'}</p>
                    </div>
                    <PrimaryButton text="Vamos lá!" click={'/'} />
                </div>
            </div>
        </div>
    )   
}