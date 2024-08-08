import Expenses from "./components/Expenses";
import { useState } from 'react';



function App() {

  let arrray = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {

      id: 'e2',
      title: 'books',
      amount: 200,
      date: new Date(2021, 5, 22)
    }
    ,
    {

      id: 'e3',
      title: 'house rent',
      amount: 2500,
      date: new Date(2021, 6, 12)
    }
    ,
    {

      id: 'e4',
      title: 'hospital',
      amount: 2500,
      date: new Date(2021, 10, 12)
    }
  ];

  const [collection, setCollection] = useState(arrray);

  const itemHandler = (expenses) => {
    let collections = [expenses, ...collection];
    setCollection(collections);
    console.log(expenses);
  }

  return (
    <>
      <Expenses item={collection} itemHandlers={itemHandler}></Expenses>
    </>
  )
}

export default App;
