import React from "react";
import './MainBanner.css'

export default function MainBanner() {

    return (
        <div className="MainBanner">
            <h1>ExPense</h1>
            <div className="img-wrapper">
                <img src="../../../exPenseLogo.png" alt="ExPense" width={200}/>
            </div>
            <p>Seu assistente pessoal de controle financeiro.</p>
        </div>
    )
}