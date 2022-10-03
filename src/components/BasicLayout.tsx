import React from "react";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";

function BasicLayout() {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
        
    );
}

export default BasicLayout;