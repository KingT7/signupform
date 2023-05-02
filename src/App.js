import './App.css';
import fitness from './fitness.png';

function App() {
  return (  
  
    <div className="App">
<img src={fitness} className='sidebar' alt="logo" width='500px' height='688px' />


<div className="wrapper">
         
<header className="h3">
<h3>
Are you looking for someone to help motivate you? <br/>
 Hold you accountable? Don't wait to sign up and join our amazing community! </h3>

</header>




       
<form action='get'>
 <div className="formContainer">



<div className="contentContainer">

<div className="space"><label for='firstName'>FIRST NAME</label>
<input type='text' name='firstName' placeholder='Enter your name...' />
</div>

<div className="space">
<label for='lastName'>LAST NAME</label>
<input type='text' name='lastName' placeholder='Enter your name...' />
</div>
</div>




<div className="contentContainer">

<div className="space"><label for='email'>E-MAIL</label>
<input type='email' name='email' placeholder='Enter your E-mail...' />
</div>

<div className="space">
<label for='tel'>PHONE NUMBER</label>
<input type='tel' name='tel' placeholder='Enter your phone number...' />
</div>
</div>







<div className="contentContainer">

<div className="space"><label for='pass'>PASSWORD</label>
<input type='password' name='pass' placeholder='Enter password' />
</div>

<div className="space">
<label for='confirm'>CONFIRM PASSWORD</label>
<input type='password' name='confirm' placeholder='Confirm password' />
</div>
</div>

</div>
</form>

        

<div className="footer">


<div className="buttonSection">

 <button className='button'> Create Account </button>
</div>

<div className="haveAccount">
  
  <p className='account'> Already have an account? Log In</p>
</div>

</div>
    </div>
    </div>
    
  );
}

export default App;
