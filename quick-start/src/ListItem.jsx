// {
//     "title": "Cabbage",
//     "id": 1
// }
import './Rendering.css'
export default function ListItem({ product }) {
    const {id, title} = product;
    return (
        <div className="listStyle">
        <h3>Id: {id} </h3>
        <p>Title: {title}</p>
        </div>
    )
}