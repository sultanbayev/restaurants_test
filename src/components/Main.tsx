import React from "react";

type MainProps = {
    children?: React.ReactNode;
}

function Main({ children }: MainProps) {
    return (
        <div>
            Main
            { children }
        </div>
    );
}

export default Main;