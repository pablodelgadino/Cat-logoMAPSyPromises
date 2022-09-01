import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/title';
import React, {useState, useEffect} from 'react';

const cakes = [
        {
          id: 1,
          category: "sweet",
          stock: 10,
          sold: 0,
          title: "Choco-Oreo",
          description: "Tortas heladas a base de crema y oreos",
          price: 1500,
          img: "../cakes/torta.jpg",
        },
      
        {
          "id": 2,
          "category": "sweet",
          stock: 10,
          sold: 0,
          title: "Shots",
          description:"Vaso de postre individual de diferentes sabores",
          price: 850,
          img: "../cakes/shots.jpg",
        },
      
        {
          "id": 3,
          "category": "sweet",
          stock: 10,
          sold: 0,
          title: "Tartitas",
          description:"Variedad de mini tartitas y mini tortitas",
          price: 600,
          img: "../cakes/tartitas.jpg",
        }
      ]
      

export const ItemListContainer = ({texto}) => {
        
    const [data, setData] = useState ([]);
    

    useEffect(()=> {
    const getData = new Promise (resolve => {
        setTimeout (()=> {
            resolve (cakes);
        }, 2000);
    });
        getData.then(res => setData(res));

    }, [])

       
    const onAdd = (quantity) => {
        console.log( `Agregaste ${quantity} unidades al carrito`)
    }
 
    return (
        <>
        <Title  greeting={texto}/>
        <ItemCount initial ={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;