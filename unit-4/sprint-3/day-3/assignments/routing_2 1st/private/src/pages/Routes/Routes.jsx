import React from "react";
import { Route,Routes } from "react-router-dom";
import PraviteRoutes from "../PrivateRoutes";

import Home from "../Home";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Setting from "../Setting";

export default function RoutesProvider(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}></Route>

            {/* pravite Routs */}
            <Route path="/dashboard" element={
            <PraviteRoutes>
                <Dashboard/>
                </PraviteRoutes>}>

                </Route>
            <Route path="/setting" element={
            <PraviteRoutes>
            <Setting/>
            </PraviteRoutes>
            }></Route>
        </Routes>
    )
}