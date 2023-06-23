import React, { useState } from "react";
import {db} from "@/components/middleware/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import {BsPlus} from 'react-icons/bs';
import { Form, InputGroup } from "react-bootstrap";
const dbInstance = collection(db, 'tasks');
const Input = () =>{
     
    const [input, setInput] = useState("");
    const inputHandler = (event) =>{
        setInput(event.target.value);
    };
    const SubmitHandler = async() =>{
        if(input){
           await addDoc(dbInstance,{
            Name: input,
            check: false
           });
        // db.collection("tasks").add({
        //     Name: input,
        //     check: false
        // });
        }
        setInput("");
    }

    return(
        <div className=" text-xl font-medium leading-tight">
            <InputGroup>
            <Form.Control type="text" onChange={inputHandler} value={input} placeholder="Enter here.."></Form.Control>
            <InputGroup.Text className="" onClick={SubmitHandler} ><BsPlus/></InputGroup.Text>
            </InputGroup> 
        </div>
    );
}

export default Input;