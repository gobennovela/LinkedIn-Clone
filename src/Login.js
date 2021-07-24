import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch((error) => alert(error.message));
    };

    const LoginToApp = (e) => {
        e.preventDefault();
    };

    auth.signInWithEmailAndPassword(email,password).then(
        (userAuth) => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
            );
        }
    )

    return (
        <div className="login">
           <img src="https://res.cloudinary.com/attendoapp-com/image/upload/v1627129305/SideProject/linkedin_1_dylizv.svg" alt=""/>
           <form>
               <input placeholder="Full name(required if registering)" value={name} 
               onChange={e => setName(e.target.value)} type="text"/>

               <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile Picture URL(optional)" type="text"/>

               <input type="email" value={email} 
               onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>

               <input type="text" value={password} 
               onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>

               <button onClick={LoginToApp}>Sign In</button>
           </form>
           <p>Not a member?{" "}<span className="login__regiter" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
