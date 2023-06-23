import React,{useState} from "react";
import { Form, InputGroup } from "react-bootstrap";
import {BsSearch} from "react-icons/bs"

const Search = ({searchInput, setsearchInput}) =>{

    const inputHandler = (event) =>{
        setsearchInput(event.target.value);
        // console.log(event.target.value);
    };
     return(
        <div className="text-xl font-medium leading-tight">
            <InputGroup>
            <InputGroup.Text>
            <BsSearch/>
            </InputGroup.Text>
            <Form.Control type="text" onChange={inputHandler} value={searchInput}  placeholder="Search here..."/>
            </InputGroup>
        </div>
     )
}
export default Search;