import ListItem from "./ListItem"

export default function ListItems() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ]
    return (
        <>
         <h2><u>List Items</u></h2>
            {
                products.map(product=>  <ListItem key={product.id} product={product}></ListItem>)
            }
        </>
    )
}