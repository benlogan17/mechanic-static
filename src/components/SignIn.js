import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../utils/firebase.utils"
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const SignIn = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.formBasicEmail.value
        const password = event.target.formBasicPassword.value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            navigate("/home")
        })
        .catch((error) => {
            setError("Could not sign in. Please try again")
        });
    };

    return (
        <Form onSubmit={handleSubmit} className='d-flex flex-column mx-5'>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="">
                Sign In
            </Button>
            {
                error ?? <Form.Label>{error}</Form.Label>
            }
        </Form>
    )
}