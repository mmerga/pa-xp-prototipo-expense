import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

export default function PrimaryButton(props) {
    const {text, click, isDisabled} = props;
    if(click === undefined){
        return (
            <>
                <button className="PrimaryButton" disabled={isDisabled ? true : false}>
                    {text}
                </button>
            </>
        );
    }
    return (
        <>
            <Link
                to={click}
                relative="path">
                <button className="PrimaryButton" disabled={isDisabled ? true : false}>
                    {text}
                </button>
            </Link>
        </>
    );
}