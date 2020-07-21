import React, {useState,useEffect} from 'react';
// import logo from './logo.svg';
import { v4 as uuid } from 'uuid'
import './App.css';
import TeammateForm from './TeammateForm'
import Member from './Member'

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
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      location:formValues.location.trim(),
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
    <div className="App">
      <header><h1>Team List</h1></header>
      <TeammateForm 
        values={formValues}
        update={updateForm}
        submit={submitForm} 
      />
      {
        team.map(member => {
          return (
            <Member key={member.id} details={member}/>
          )
        })
      }
    </div>
  );
}

export default App;
