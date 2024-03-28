import React, { useState } from "react";
import './ForgetAccount.css'
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";
import { useNavigate } from "react-router-dom";

export default function ForgetAccount() {
    let [isShow, setIsShow] = useState(false);
    let navigate  = useNavigate();

    function handleClickConfirm() {
        setIsShow(true)
    }
    
    function goBack(){
        navigate('/login')
    }


    if(isShow === true){
        return (
            <div className="ForgetAccount">

                <div className="forget-account-infos">
                <i className="fa-solid fa-circle-chevron-left" onClick={goBack}></i>
                    <p>Conta enviada com sucesso.</p>
                </div>

                <div className="forget-account-form-wrapper">
                    <p>Em instantes, o número da conta
                        será enviado para seu e-mail.</p>
                </div>
            </div>
        )
    }

    if(isShow === false){
        return (
            <div className="ForgetAccount">

                <div className="forget-account-infos">
                <i className="fa-solid fa-circle-chevron-left" onClick={goBack}></i>
                    <p>Para recuperar sua conta, confirme seus dados abaixo.</p>
                </div>

                <div className="forget-account-form-wrapper">
                    <form className="forget-account-form"> 
                        <div id="floatingInput">
                            <div  className="form-floating">
                                <input type="text" inputMode="numeric" className="form-control" id="floatingInputCpf" placeholder="CPF" />
                                <label htmlFor="floatingInputCpf">CPF</label>
                            </div>
                        </div>
                        <div id="floatingInput">
                            <div  className="form-floating">
                                <input  type="text"  className="form-control" id="floatingInputDate" placeholder="Data de Nascimento" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                                <label htmlFor="floatingInputDate">Data de Nascimento</label>
                            </div>
                        </div>
                        <div className="forget-account-button-wrapper" onClick={handleClickConfirm}>
                            <PrimaryButton text="Confirmar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}