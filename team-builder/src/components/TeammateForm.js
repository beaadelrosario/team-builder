import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    background: #fff2e6;
    padding:2% 0%;
    letter-spacing:1.1px;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    margin-left:10%;
    margin-right:10%;
    border: 1px dashed grey;

    button {
        background: pink;
        color:black;
        font-weight: 800;
        font-size: 16px;
        margin: 3% 1%;
    }

    label {
        padding:2%;
    }
`

export default function TeammateForm(props) {
    const { values, update, submit } = props

    const onChange = event => {
        // same as below
        // const name = evt.target.name
        // const value = evt.target.value
        const {name, value} = event.target
        update (name, value)
    }
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return(
        <StyledForm className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a New Teammate</h2>

                <div className='form-group inputs'>
                <h3>Team Member Info</h3>
                <label htmlFor='matenameInput'>Name:&nbsp;
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='First Name Last Name'
                        maxLength='70'
                        value={values.name}
                        onChange={onChange}                     
                    />
                </label>

                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        maxLength='70'
                        value={values.email}
                        onChange={onChange}                     
                    />
                </label>

                <label htmlFor='locationInput'>Location:&nbsp;
                    <input
                        id='locationInput'
                        name='location'
                        type='text'
                        placeholder='Enter your location'
                        maxLength='70'
                        value={values.location}
                        onChange={onChange}                     
                    />
                </label>

                <label>Role:&nbsp;
                    <select 
                    name='role'
                    value={values.role}
                    onChange={onChange}>
                    <option value=''>Select a role</option>
                    <option value='Student'>Student</option>
                    <option value='Instructor'>Instructor</option>
                    <option value='Team Lead'>Team Lead</option>
                    <option value='other'>Other</option>
                    </select>                    
                </label>
            </div>

                <button disabled={!values.name || !values.email || !values.location || !values.role}>Add Teammate</button>
            </div>
        </StyledForm>
    )
}