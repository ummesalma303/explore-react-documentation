import Admin from './Admin';
import Form from './Form';

export default function AdminForm() {
    const isLogged = true;
    // let content;
    // function handleClick(status) {
    // //     {status?<Admin></Admin>:<Form></Form>}
    //     //     console.log(status)
    //     if (status) {
    //         content = <Admin></Admin>
    //     } else {
    //         content=<Form></Form>
    //     }
    //     console.log(content)
    // }
    return (
        <div>
            {isLogged?<Admin></Admin>:<Form></Form>}
            {/* <h2>{ content}</h2>
             <button onClick={()=>handleClick(true)}> Click me</button> */}
            {/* <Form></Form> */}
        </div>
    )
}