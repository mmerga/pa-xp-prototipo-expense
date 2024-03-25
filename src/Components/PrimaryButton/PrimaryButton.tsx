import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

export default function PrimaryButton(props) {
    const {text, click} = props;
    return (
        <>
            <button className="PrimaryButton">
                <Link
                    to={click}
                    relative="path">
                    {text}
                </Link>
            </button>
        </>
    );
}