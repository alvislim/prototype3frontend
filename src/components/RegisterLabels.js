import React, { Component } from 'react'

function RegisterForm(props) {
    return (
        <div className="row pb-5">
            <div className="col-md-6 m-auto">
                <div className='card card-body'>
                    <h1 className='text-center mb-3'>
                        <svg className="bi bi-person-plus" width="1em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            <path fillRule="evenodd" d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z" />
                        </svg>REGISTER
                        </h1>
                    <div className='form-group-sm mb-3'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            className='form-control'
                            placeholder='Enter Name'
                            value={props.name}
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <div className='form-group-sm mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            className='form-control'
                            placeholder='Enter Email Address'
                            value={props.email}
                            onChange={props.handleChange}
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group-sm mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            className='form-control'
                            placeholder='Create Password'
                            value={props.password}
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <div className='form-group-sm'>
                        <label htmlFor='password2'>Password</label>
                        <input
                            type='password'
                            id='password2'
                            className='form-control'
                            placeholder='Create Password'
                            value={props.password2}
                            onChange={props.handleChange}
                            required
                        />
                    </div>
                    <button className='btn btn-primary btn-block mt-4'>Register</button>
                </div>
            </div>
        </div>
    )
}


export default RegisterForm