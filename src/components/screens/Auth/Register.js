import React, {useContext, useState, useEffect} from 'react'
import { Link ,useNavigate,useLocation,useMatch } from 'react-router-dom';
import {MyContext} from './../../../contexts/MyContext';
import  {lgaList}  from './../../../LGA';
import {StateList} from './../../../StatesAndCapitals';
import Navbar from '../NavBar/';
import Footer from "./../Footer";

function RegisterScreen(props) {

    const history=useNavigate();
    const location =useLocation();
    const match =useMatch("/signup");
   
    const [lgas, setLgas] = useState("Abia");


    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            fname:'',
            lname:'',
            email:'',
            phone:'',
            states:'',
            lga:'',
            password:'',
            password2:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.fname]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="signin-error-message">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="signin-success-message">{state.successMsg}</div>;
    }

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    const redirect = location.pathname ? location.pathname.split("=")[1] : '/';

    useEffect(() => {
      if (isAuth) {
          
        props.history(redirect);
      }
      return () => {
        //
      };
    }, [isAuth]);
  
    const valueState =lgaList.lgas;

  return (
  <React.Fragment>
  <Navbar />
  <div className="form-wrapper">
   <div className="form">

{valueState}

    <form  onSubmit={submitForm} noValidate>
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
        
         {errorMsg}
          {successMsg}
         
        </li>
        <div className="input-container">
        <li>         
          <input name="fname" required type="text" value={state.userInfo.fname} onChange={onChangeValue}
           placeholder="Enter your first Name"/>
        </li>
        <li>
         
         <input name="lname" required type="text" value={state.userInfo.lname} onChange={onChangeValue}
          placeholder="Enter your Last Name"/>
       </li>
        <li>
         
          <input name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue}
           placeholder="Enter your email"/>
        </li>
        <li>
         
         <input name="phone" required type="text" value={state.userInfo.phone} onChange={onChangeValue}
          placeholder="Enter your Phone Number"/>
       </li>
        <li>
        <div className="options">
        <select  onChange={onChangeValue} 
           value={state.userInfo.states}

        >

							<option value="">-- Select Your State --</option>
							<option value="Abia">Abia</option>
							<option value="Adamawa">Adamawa</option>
							<option value="AkwaIbom">AkwaIbom</option>
							<option value="Anambra">Anambra</option>
							<option value="Bauchi">Bauchi</option>
							<option value="Bayelsa">Bayelsa</option>
							<option value="Benue">Benue</option>
							<option value="Borno">Borno</option>
							<option value="Cross River">Cross River</option>
							<option value="Delta">Delta</option>
							<option value="Ebonyi">Ebonyi</option>
							<option value="Edo">Edo</option>
							<option value="Ekiti">Ekiti</option>
							<option value="Enugu">Enugu</option>
							<option value="FCT">FCT</option>
							<option value="Gombe">Gombe</option>
							<option value="Imo">Imo</option>
							<option value="Jigawa">Jigawa</option>
							<option value="Kaduna">Kaduna</option>
							<option value="Kano">Kano</option>
							<option value="Katsina">Katsina</option>
							<option value="Kebbi">Kebbi</option>
							<option value="Kogi">Kogi</option>
							<option value="Kwara">Kwara</option>
							<option value="Lagos">Lagos</option>
							<option value="Nasarawa">Nasarawa</option>
							<option value="Niger">Niger</option>
							<option value="Ogun">Ogun</option>
							<option value="Ondo">Ondo</option>
							<option value="Osun">Osun</option>
							<option value="Oyo">Oyo</option>
							<option value="Plateau">Plateau</option>
							<option value="Rivers">Rivers</option>
							<option value="Sokoto">Sokoto</option>
							<option value="Taraba">Taraba</option>
							<option value="Yobe">Yobe</option>
							<option value="Zamfara">Zamafara</option>
						</select>
              </div>
        </li>
        <li>
              <div className="options">
              <select  value={state.userInfo.lga} 

              onChange={onChangeValue} className="filter"
                            >
              <option value="" > -- Select Your L.G.A -- </option>

                              {(lgaList.Abia).map(
                                (x,i) => (
                                  <option key={x.name} value={x}
                                  disabled=""
                                  >
                                    {x}
                                  </option>
                                )
                              )}
                            </select>
              </div>
        </li>
      
        <li>
          <input name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} 
          placeholder="Enter your password"/>
        </li>
        <li>
          <input name="password2" required type="password" value={state.userInfo.password2} onChange={onChangeValue} 
          placeholder="Confirm your password"/>
        </li>
        </div>
        <li>
          <button type="submit" className="submit-button">Create Account</button>
        </li>
      
        <div className="bottom">
        <li>
          Already Have an Account?
        </li>
        <li>
          <Link to="/signin" className="bottom-button" >Sign-In</Link>
        </li>
        </div>
      </ul>
    </form>
  </div>
</div>
  <Footer />
    </React.Fragment>
  );
}
export default RegisterScreen;