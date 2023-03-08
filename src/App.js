import { useState } from 'react';
import './App.css';

function App() {

  const [showForm, setShowForm] = useState(false);

  const [expenses, setExpenses] = useState([
    {
      date: "22",
      month: "June",
      year: "2022",
      name: "New Tv",
      price: "60"
    },
    {
      date: "02",
      month: "May",
      year: "2022",
      name: "Mobile",
      price: "70"
    }
  ]);

  const [value, setValue] = useState('2022');

  const [getInputExpenses, setInputExpenses] = useState({
    date: "",
    month: "",
    year: "",
    name: "",
    price: ""
  })

  function changeHandle(event){
    setInputExpenses({
      ...getInputExpenses, 
      [event.target.name]:event.target.value});
  }

  let {date, month, year, name, price} = getInputExpenses;

  function onSubmit(){
    setExpenses([...expenses, {date, month, year, name, price}]);
    setInputExpenses({date: "",
    month: "",
    year: "",
    name: "",
    price: ""})
    setShowForm(false)
  }

  function handleSelect(event){
    setValue(event.target.value);
  }

  const Form = () =>
    <section className='expense-form'>
      <input type="text" name="date" placeholder='enter date' value={getInputExpenses.date} onChange={changeHandle} required="true" /><br />
      <input type="text" name="month" placeholder='enter month' value={getInputExpenses.month} onChange={changeHandle} required="true" /><br />
      <input type="text" name="year" placeholder='enter year' value={getInputExpenses.year} onChange={changeHandle} required="true" /><br />
      <input type="text" name="name" placeholder='enter name' value={getInputExpenses.name} onChange={changeHandle} required="true" /><br />
      <input type="text" name="price" placeholder='enter price' value={getInputExpenses.price} onChange={changeHandle} required="true" /><br />
      <button className='btn' onClick={onSubmit}>Add Data</button>
      <button className='cancel-btn' onClick = {() => {setShowForm(false);}}>Cancel</button>
    </section>;

  return (
    <div className="App">
      <header className='addBtn'>
        <button className='btn' onClick = {() => {setShowForm(true);}}>Add Expenses</button>
      </header>
      <div style={{margin: "20px"}}>
        { showForm ? <Form /> : null }
      </div>
      <section className='app-list'>
        <div className='filter-area'>
          <p style={{textAlign: "left", marginLeft: "30px", color: "#fff"}}>Filter By Year 
          <span>
            <select style={{float: 'right', marginRight: "40px"}} value={value} onChange={handleSelect}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </span></p>
        </div>
        {expenses.filter(expense => expense.year.includes(value)).map((expense, index) => {
          return (<div key={index} className='row'>
          <div className='col-1'>
            <li>{expense.month}</li>
            <li>{expense.year}</li>
            <li>{expense.date}</li>
          </div>
          <div className='col-2'>{expense.name}</div>
          <div className='col-3'>${expense.price}</div>
        </div>)
        })}
      </section>
    </div>
  );
}

export default App;
