import { useState, useEffect } from 'react'
import { bookTable } from './tableBookingSlice'
import { useDispatch } from "react-redux"

const BookTable = () =>{
  const [date, setDate] = useState(()=>{
    const now = new Date();
    now.setDate(now.getDate()+1);
    return now.toISOString().substring(0,10);
  })
  const [time, setTime] = useState('13:00');
  const [email, setEmail] = useState('');
  const [dateValid, setDateValid] = useState(true);
  const [timeValid, setTimeValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    let selectedDate = new Date(date);
    let now = new Date();
    if(selectedDate<now){
      setDateValid(false)
    }else{
      setDateValid(true)
    }
  }
  ,[date])
  
  useEffect(()=>{
    let hour = Number(time.split(':')[0])
    if(hour<13 || hour > 22){
      setTimeValid(false)
    }else{
      setTimeValid(true)
    }
  }
  ,[time])
  
  useEffect(()=>{
   if(email){
    if(email.includes('@') && email.includes('.')){
      setEmailValid(true)
    }else{
      setEmailValid(false)
    }
   }
  },[email])

  function updateDate(e){
    setDate(e.target.value);
  }

  function updateTime(e){
    setTime(e.target.value);
  }

  function updateEmail(e){
    setEmail(e.target.value);
  }

  function submitForm(e){
    e.preventDefault();
    if(!dateValid){
      alert('Booking date should be at least one day in advance');
    }else if(!timeValid){
      alert('Booking time should be between 1.00 PM and 10.00 PM');
    }else if(!emailValid || !email){
      alert('Please provide a valid email before booking a table');
    }else{
      dispatch(bookTable({
        date,
        email,
        time
      }))
    }
  }
  
  return (
    <div className="mb-12">
      <h2 className="mb-4 font-medium text-lg">Book A Table</h2>
      <form className="w-11/12 bg-white rounded-md shadow-lg py-4" action="#" onSubmit={submitForm}>
        {!dateValid && 
          <pre className='p-2 text-center text-sm text-red-500'>Your booking date should be at least one day in advance.</pre>
        }
        {!timeValid &&
          <pre className='p-2 text-center text-sm text-red-500'>Booking time should be between 1.00 PM and 10.00 PM EAT</pre>
        }
        {!emailValid &&
        <pre className='p-2 text-center text-sm text-red-500'>Please provide a valid email address</pre>
        }
        <div className="flex justify-center p-4">
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Date</label>
            <input type="date" value={date} onChange={updateDate} className="block py-2 px-4 border-2"/>
          </div>
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Time</label>
            <input type="time" value={time} onChange={updateTime} className="block py-2 px-4 border-2"/>
          </div>
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Email</label>
            <input type="email" value={email} onChange={updateEmail} className="block py-2 px-4 border-2"/>
          </div>
          <div className="justify-center-auto mr-8">
          <button className="bg-black text-white py-3 px-5 rounded-lg mt-6">Book A Table</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BookTable