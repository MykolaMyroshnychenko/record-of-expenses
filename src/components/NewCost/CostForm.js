import React, { useState } from "react";
// import CostDate from "../Costs/CostDate";
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // 2-вариант
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // 2-вариант
    //     setUserInput({
    //         ...userInput,
    //         name: event.target.value
    //     })
    };

    const amountChangeHandler = (event) => {
        //1-вариант
        setInputAmount(event.target.value);

        //2-вариант
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })

        //3-вариант
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);

        //2-вариант
    //     setUserInput({
    //         ...userInput,
    //         date: event.target.value
    //     })
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate) 
        };

        props.onSaveCostData(costData);
        setInputName(''); // таким образом мы запишем новое состояние в input
        setInputAmount('');
        setInputDate('');
    };


    
    // const [showForm, setShowForm] = useState(false);
    // const toggleForm = () => {
    //     setShowForm(!showForm);
            
    // }

    return (
            // <div className="new-cost__actions">
            //     <button type='submit' onClick={toggleForm}>Добавить Новый Расход</button>
            //     {showForm && (
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        <input type='text' value={inputName} onChange={nameChangeHandler} />
                    </div>

                    <div className="new-cost__control">
                        <label>Сумма</label>
                        <input type='number' min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} /> 
                    </div>

                    <div className="new-cost__control">
                        <label>Дата</label>
                        <input type='date' min='2019-01-01' step='2025-12-31' value={inputDate} onChange={dateChangeHandler} />
                    </div>

                    <div className="new-cost__actions">
                        <button type='submit'>Добавить Расход</button>
                    </div>

                    <div className="new-cost__actions">
                        <button type='button' onClick={props.onCancel}>Отмена</button>
                    </div>
                </div>
            </form>
        //         )}
        // </div>
    )
}

export default CostForm;