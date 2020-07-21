import React from 'react'

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
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a New Teammate</h2>
                <button disabled={!values.name || !values.email || !values.location || !values.role}>Add Teammate</button>
            </div>

            <div className='form-group inputs'>
                <h3>Teammate Info</h3>
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
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>
                    <option value='tl'>Team Lead</option>
                    <option value='other'>Other</option>
                    </select>                    
                </label>
            </div>
        </form>
    )
}