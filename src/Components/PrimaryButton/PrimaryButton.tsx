import React from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";

export default function PrimaryButton(props) {
    const {text, click} = props;
    return (
        <>
            <Link
                to={click}
                relative="path">
                <button className="PrimaryButton">
                    {text}
                </button>
            </Link>
        </>
    );
}