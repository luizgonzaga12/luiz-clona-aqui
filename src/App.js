import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    /*const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);*/
  

   
  }

  useEffect(() => {

    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);

    }; 
    
    fetchUsers()
    
    
  }, []);

  // REACT HOOK => userEffect (efeito colateral)
  // A minha aplicaçao inicia (A pagina carregou o UserEffetct é chamado)
  // Quando um estado que está no array de dependencia do userEffect é alterado

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Ola, Luiz Gonzaga!</H1>
        <InputLabel>Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade </InputLabel>
        <Input ref={inputAge} placeholder="idade" />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p>
              <p> {user.age} </p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;