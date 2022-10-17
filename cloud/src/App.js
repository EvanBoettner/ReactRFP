import React, {useState} from 'react';
import './App.css';
//yo
function App(){
// React States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) => 
  name === errorMessages.name && (
    <div className='error'>{errorMessages.message}</div>
  );

// User Login info
const database = [
  {
    username: 'user1',
    password: 'pass1'
  },
  {
    username: 'user2',
    password: 'pass2'
  }
];

const errors = {
  uname: 'invalid username',
  pass: 'invalid password'
};

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass} = document.forms[0];

//Find user login info
const userData = database.find((user) => user.username === uname.value)

//Compare user info
if (userData) {
  if (userData.password !== pass.value) {
    // Invalid password
    setErrorMessages({name: 'pass', message: errors.pass});
  } else {
    setIsSubmitted(true);
  }
} else {
  // Username not found
  setErrorMessages({name: 'uname', message: errors.uname});
}
  };
  


  const renderForm = (
  <div className='form'>
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <label>Username </label>
        <input type='text' name='uname' required />
        {renderErrorMessage('uname')}
      </div>
      <div className='input-container'>
        <label>Password </label>
        <input type='password' name='pass' required />
        {renderErrorMessage('pass')}
      </div>
      <div className='button-container'>
        <input type='submit' />
      </div>
    </form>
  </div>
);

return (
  <div className='app'>
    <div className='login-form'>
      <div className='title'>Sign In</div>
      <img className='GE' src='https://1000logos.net/wp-content/uploads/2020/03/GE-Healthcare-Logo-2004.png' alt='GElogo'/>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
);
  }




export default App;
