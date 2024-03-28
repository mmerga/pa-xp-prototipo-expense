import React from "react";
import './MainBanner.css'
import { Link } from "react-router-dom";

export default function MainBanner() {

    return (
        <div className="MainBanner">
            <h1>ExPense</h1>
            <div className="img-wrapper">
                <Link to={'/'}
                      relative="path">
                    <img src="../../../exPenseLogo.png" alt="ExPense" width={200}/>
                </Link>
            </div>
            <p>Seu assistente pessoal de controle financeiro.</p>
        </div>
    )
}