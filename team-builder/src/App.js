import React, {useState,useEffect} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import TeammateForm from './components/TeammateForm'
import Member from './components/Member'
import styled from 'styled-components'
import lambdaLogo from './components/lambda logo sheilf.png'

const StyledApp = styled.div`
 padding: 5% 5%;
 background:#f6f4f4;
 font-family:Georgia, 'Times New Roman', Times, serif;
 /* background-image:url("https://images.unsplash.com/photo-1519248010288-0b8d3e8e1500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2256&q=80");
 background-size: cover;
 background-position: center;
background-repeat: no-repeat; */

h1 {
  text-transform:uppercase;
}

h2 {
  text-decoration:underline;
}

`

const initialTeamList =[
  {
    id: uuid(),
    name: 'Bea Del Rosario',
    email: 'delrosario.bea@gmail.com',
    location: 'San Francisco',
    role: 'Student',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  location: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { name, email, location, role }) => {
  const newTeammate = { id: uuid(), name, email, location, role }
  return Promise.resolve({ status: 200, success: true, data: newTeammate })
}

function App() {
  const [ team, setTeam ] = useState([])

  const [ formValues, setformValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedformValues = { ...formValues , [inputName] :inputValue}
    setformValues(updatedformValues)
  }

  const submitForm = () => {
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      location: formValues.location.trim(),
      role: formValues.role,
    }

    if (!newTeammate.name || !newTeammate.email || !newTeammate.location || !newTeammate.role) return

    fakeAxiosPost('fakeapi.com', newTeammate)
    .then( response => {
      const teammateFromAPI = response.data
      setTeam([teammateFromAPI, ...team ])
      setformValues(initialFormValues)
    })
    .catch( error =>{
      console.log(error)
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(response => setTeam(response.data))
  },[])

  return (
    <StyledApp className="App">
      <header><h1>Lambda Team Roster App</h1></header>
      <img src={lambdaLogo}/>
      <TeammateForm 
        values={formValues}
        update={updateForm}
        submit={submitForm} 
      />
      <h2>Meet The Team</h2>
      {
        team.map(member => {
          return (
            <Member key={member.id} details={member}/>
          )
        })
      }
    </StyledApp>
  );
}

export default App;
