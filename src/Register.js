import React, { useState } from 'react';
import {  useHistory,Link } from 'react-router-dom';
import './Register.css';
import { auth,db  } from './firebase'

function Register() {
    const history = useHistory("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState([]);
    const [gender, setGender] = useState("");

    const register = (event) => {
        event.preventDefault();
        if (birthday[2] >= 2010) {
            return alert("You are not eligible to register to Facebook!")
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: firstName + " " + lastName,
                        photoURL: "https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg"
                    }).then((s) => {
                        db.collection('users').doc(auth.user.uid).set({
                            uid: auth.user.uid,
                            displayName: auth.user.displayName,
                            email: auth.user.email,
                            photoURL: "https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg",
                            birthday,
                            gender,
                            bio: ""
                        })
                            .then((r) => {
                                history.push("/")
                            })
                    })
                }
            })
            .catch((e) => {
                if (
                    e.message ===
                    "The password is invalid or the user does not have a password."
                ) {
                    alert("Please check your credentials again");
                } else if (
                    e.message ===
                    "There is no user record corresponding to this identifier. The user may have been deleted."
                ) {
                    history.push("/register");
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            });
    }
    return (
        <div className="register">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login_logo" />
            <div className="register_container">
                <h1>Sign Up</h1>
                <p>It's quick and easy.</p>
                <div className="hr3" />
                <form>
                    <div className="row">
                        <input 
                           onChange={(e) => {
                               setFirstName(e.target.value);
                            }}
                            className="register_name"
                            type="name"
                            placeholder="First Name"
                            required 
                        />
                        <input 
                           onChange={(e) => {
                               setLastName(e.target.value);
                            }}
                            className="register_name"
                            type="name"
                            placeholder="Last Name"
                            required  
                        />
                    </div>
                    <center>
                        <input 
                           onChange={(e) => {
                               setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Email"  
                        />
                    </center>
                    <center>
                        <input 
                           onChange={(event) =>
                               setPassword(event.target.value)
                            }
                            type="password"
                            placeholder="New Password"  
                        />
                    </center>
                    <center>
                        <h5 className="register_date">Date Of Birth</h5>

                        <div className="row">
                            <select className="register_date2" onChange={(e) => setBirthday([...birthday, e.target.value])}>
                                <option value="Day">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>

                            <select className="register_date3" onChange={(e) => setBirthday([...birthday, e.target.value])}>
                                <option value="Day">Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                            <select className="register_date3" onChange={(e) => setBirthday([...birthday, e.target.value])}>
                                <option value="Day">Year</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                            </select>
                        </div>
                    </center>
                    <h5 className="register_gender">Gender</h5>

                    <div className="register_radiocontainer">
                        <div className="wrapper">
                            <label>Female</label>
                            <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Female" required  />    
                        </div>
                        <div className="wrapper">
                            <label>Male</label>
                            <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Male" required  />
                        </div>
                        <div className="wrapper">
                            <label>Other</label>
                            <input onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Other" required  />
                        </div>
                    </div>

                    <p className="register_policy">
                        By clicking Sign Up, you agree to our{" "}
                        <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
                        may receive SMS notification from us and can opt out at any time.
                    </p>
                    <center>
                        <button onClick={register} type="submit" className="register_register">
                            Sign Up 
                        </button>
                    </center>
                    <center>
                        <Link to="/login" >
                            <p className="register_login">Already have an account ?</p>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Register
