import React from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";

export function UserDynamic() {
    let params = useParams();

    return (
    <div>
        <Navbar />
        <h1>UserDynamic {params.id}</h1>
    </div>)
}