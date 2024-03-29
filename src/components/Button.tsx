import React, { ReactNode } from 'react';

type ButtopProps = {
    children: ReactNode,
    customClass: string
}

function Button(props : ButtopProps) {
    return (<button type ="button" className={`btn ${props.customClass}`}>{props.children}</button>);
}

export default Button;