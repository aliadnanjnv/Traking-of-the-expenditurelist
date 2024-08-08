import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
function Expenses(props) {

    let [enterdate, changeDate] = useState();
    let [entertitle, changeTitle] = useState();
    let [enterprize, changePrize] = useState();

    const dateHandler = (e) => {
        changeDate(e.target.value);
    }

    const titleHandler = (e) => {
        changeTitle(e.target.value);

    }

    const prizeHandler = (e) => {
        changePrize(e.target.value);
    }





    const submitHandler = (event) => {
        event.preventDefault();
        const expensedata = {
            date: new Date(enterdate),
            title: entertitle,
            amount: enterprize
        }


        console.log(expensedata);



        changeDate("");
        changeTitle("");
        changePrize("");

        props.itemHandlers(expensedata);

    }

    return (
        <>
            <div className="expenses">


                <form onSubmit={submitHandler}>
                    <div className="all-items">
                        <div className="date" ><input type="date" value={enterdate} onChange={dateHandler} /></div>
                        <div className="title"><input type="text" value={entertitle} onChange={titleHandler} /></div>
                        <div calssName="prize"><input type="number" value={enterprize} onChange={prizeHandler} /></div>

                    </div>
                    <div>
                        <button type="submit" className="key" >Enter</button>
                    </div>
                </form>





                {
                    props.item.map((count) => (
                        <ExpenseItem
                            date={count.date}
                            title={count.title}
                            amount={count.amount}
                        />
                    ))

                }


            </div>

        </>
    );
}

export default Expenses;