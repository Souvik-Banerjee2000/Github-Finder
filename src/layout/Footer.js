import React from "react";

import {Container} from "reactstrap";

const Footer = ()=>{

    return(
        <Container 
        fluid
        tag = "footer"
        className= "text-center bg-info text-with text-uppercase fixed-bottom p-3"
        >
            Github Search Engine
        </Container>
    )

}
export default Footer;