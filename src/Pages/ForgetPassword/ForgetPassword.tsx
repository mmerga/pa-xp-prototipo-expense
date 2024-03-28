import React, { useState } from "react";
import './ForgetPassword.css'
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.tsx";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
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
            <div className="ForgetPassword">

                <div className="forget-password-infos">
                <i className="fa-solid fa-circle-chevron-left" onClick={goBack}></i>
                    <p>Senha enviada com sucesso.</p>
                </div>

                <div className="forget-password-form-wrapper">
                    <p>Em instantes, uma senha provisória será enviada para seu e-mail.</p>
                </div>
            </div>
        )
    }

    if(isShow === false){
        return (
            <div className="ForgetPassword">

                <div className="forget-password-infos">
                <i className="fa-solid fa-circle-chevron-left" onClick={goBack}></i>
                    <p>Para recuperar sua senha, confirme seus dados abaixo.</p>
                </div>

                <div className="forget-password-form-wrapper">
                    <form className="forget-password-form"> 
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
                        <div className="forget-password-button-wrapper">
                            <label onClick={handleClickConfirm}><PrimaryButton text="Confirmar" /></label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}