import React from 'react'
import GoogleLogin from 'react-google-login'

function LoginLabel(props) {
    return (
        <div className="row pb-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><svg className="bi bi-box-arrow-in-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"/>
              <path fillRule="evenodd" d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"/>
            </svg>Login</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter Email" 
                  onChange = {props.handleChange}
                  value={props.email}
                  required
                />
              </div>
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group showPw">
                <input 
                  type="password" 
                  id="password" 
                  className="form-control password" 
                  placeholder="Enter Password" 
                  onChange = {props.handleChange}
                  value={props.password}
                  required
                />
              </div>
            </div>
              <button 
              className="btn btn-primary btn-block">Login</button>
                              <GoogleLogin 
                    clientId='825484293224-ridcbmjkgra0tiubl10q2fcpaqre5bj5.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={props.responseGoogle}
                    onFailure={props.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
             <div>
              <p className="lead mt-4"> No Account? <a href="/register">Register</a>  </p>
              <p className="lead mt-4"> Forgot your Password? Click <a href="/forgotpw">Here</a> </p>
             </div> 
          </div>
        </div>
      </div>
    )
}
export default LoginLabel