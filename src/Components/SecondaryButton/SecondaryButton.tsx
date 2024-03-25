import React from "react";
import './SecondaryButton.css'
import { Link } from "react-router-dom";

export default function SecondaryButton(props) {
    const {text, click} = props;
    return (
        <>
            <button className="SecondaryButton">
                <Link
                    to={click}
                    relative="path">
                    {text}
                </Link>
            </button>
        </>
    );
}