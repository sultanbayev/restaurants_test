import React from "react";
import AppHeader from "./AppHeader";
import Main from "./Main";

type BasicLayoutProps = {
    children?: React.ReactNode;
}

function BasicLayout({ children }: BasicLayoutProps) {
    return (
        <>
            <AppHeader />
            <Main>
                { children }
            </Main>
        </>
        
    );
}

export default BasicLayout;