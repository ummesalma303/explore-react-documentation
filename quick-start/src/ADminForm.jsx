import { useState } from 'react';
import Admin from './Admin';
import Form from './Form';

export default function AdminForm() {
    const [state, setState] = useState(false);
   function handleClick() {
    setState(!state);
   }
    return (
        <div>
            {
             state?<Admin></Admin> : <Form></Form>
            } <br />
            <button onClick={handleClick}>Click</button>

        </div>
    )
}