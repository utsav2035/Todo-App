import React from "react";
import { Button } from "react-bootstrap";
import {MdDelete} from "react-icons/md"
import 'bootstrap/dist/css/bootstrap.min.css';
import {doc, deleteDoc } from "firebase/firestore";
import {db} from "@/components/middleware/firebaseConfig";

const Todo = ({Item}) =>{
    // const handleEdit = () =>{

    // }

    const handleDelete = () =>{
         const collectionById = doc(db,'tasks',Item.id);

         deleteDoc(collectionById);
    }
    return(
        <div className="d-flex justify-content-between">
          {Item.check ? (
          <>
            <p style={{textDecoration:"line-through"}} className="text-success">{Item.Name}</p>     
          </>) : (
            <>
              <p className="">{Item.Name}</p>
            </>
          )}
          <div>
          {/* <Button variant="outline-warning" className="mr-3" onClick={handleEdit}><AiTwotoneEdit/></Button> */}
          <Button variant="outline-danger" onClick={handleDelete}><MdDelete/></Button>
          </div>
        </div>
    )
}

export default Todo;