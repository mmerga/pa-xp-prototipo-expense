import React from "react";
import './SecondaryButton.css'
import { Link } from "react-router-dom";

export default function SecondaryButton(props) {
    const {text, click} = props;
    return (
        <>
            <Link
                to={click}
                relative="path">
                <button className="SecondaryButton">
                    {text}
                </button>
            </Link>
        </>
    );
}