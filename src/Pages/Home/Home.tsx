import React from "react";
import './Home.css'

import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton.tsx";

export default function Home() {

    return (
        <div className="Home">
            <div className="info-wrapper">
                <div className="img-wrapper">
                    <img src="../../../exPenseLogo.png" alt="ExPense" width={200}/>
                </div>
                <div className="home-text-wrapper">
                    <p>O seu assistente pessoal de controle financeiro.</p>
                </div>
            </div>
            <div className="button-wrapper">
                <PrimaryButton text="Acesse sua conta" click={'/login'}/>
                <SecondaryButton text="Abra uma conta" click={'/register'}/>
            </div>
        </div>
    )
}