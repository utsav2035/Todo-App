import { collection, addDoc, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from "@/components/middleware/firebaseConfig";
import Input from '@/components/components/input';
import { useEffect, useState } from 'react';
import Todo from '@/components/components/todo';
import Search from '@/components/components/search';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const dbInstance = collection(db, 'tasks');

export default function Home({productArray}) {
  const [todolist, settodolist] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [filteredtodo, setfilteredtodo] = useState([]);
  // const gettodo = async() =>{
  //   let data = await getDocs(dbInstance)
  //   let products = data.docs.map((item) => { return { ...item.data(), id: item.id } });
  //   settodolist([...products]);
  // }
  
  
  useEffect(()=>{
    //  settodolist(productArray);
    // gettodo();
    
    const q = query(dbInstance);
    const ndata = onSnapshot(q,(querySnapshot)=>{
    settodolist(querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
    });
  },[])


  useEffect(()=>{
    let filter = [...todolist];
    filter = filter.filter((el)=>{
      console.log(el);
      let item = el.Name.toLowerCase();
      return item.includes(searchInput.toLowerCase());
    });
    // console.log(...filter);
    setfilteredtodo([...filter]);
  },[todolist,searchInput]);

  return (
   <div className='App h-screen mx-auto bg-slate-200'>
        <h1 style={{textDecoration:"underline"}} className='text-center m-5 mt-0 text-4xl font-medium leading-tight text-primary'>
          <div className='pt-5 font-weight-bold'>To-do App</div>
          </h1>     
          <Container>
          <Row className='mb-5'>
            <Col xs={6} className='items-right'>
              <div className='' ><Input/></div>
            </Col>
            <Col xs={6} className='items-right'>
               <div className=''><Search searchInput={searchInput} setsearchInput={setsearchInput}/></div>
            </Col>
          </Row>
          <ListGroup>
          {filteredtodo.map((item)=>(
            <ListGroup.Item key={item.id}>
                <Todo Item={item}/>
            </ListGroup.Item>
             )
            )}
          </ListGroup>
        </Container> 
   </div>
  )
}

// export async function getServerSideProps(context) {
//   let data = await getDocs(dbInstance)
//   let products = data.docs.map((item) => { return { ...item.data(), id: item.id } });
//   console.log(products);
//   return {
//     props: { productArray: JSON.parse(JSON.stringify(products)) }
//   }
// }