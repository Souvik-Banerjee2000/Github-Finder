import React, { useState, useContext } from "react";
import Axios from "axios";

import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = ()=>{

    const context = useContext(UserContext);
    const [query,setQuery] = useState('');
    const [user,setUser] = useState(null);

    const fetchDetails = async  () =>{
        try {
            const {data} = await Axios.get( `https://api.github.com/users/${query}`)
        } catch (error) {
            toast("Not Ablen to Locate The User",{type:"error"})  
        }
    }
    return(
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input
                        type="text"
                        value={query}
                        onChange = {e=>setQuery(e.target.value)}
                        placeholder="provide username"
                            />
                        <InputGroupAddon addonType="append">
                            <Button color="primary">Fetch User</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ? <UserCard user = {user}/> :null}
                </Col>
                <Col md="7"></Col>
            </Row>
        </Container>
    )
}
export default Home;