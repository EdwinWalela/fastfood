function BookTable(){
  return (
    <div className="">
      <h2 className="mb-4 font-medium text-lg">Book A Table</h2>
      <form>
        <label>Date</label>
        <input type="date" className="py-2 px-4"/>
        <label>Time</label>
        <input type="time" className="py-2 px-4"/>
        <label>Email</label>
        <input type="email" className="py-2 px-4"/>
      </form>
    </div>
  )
}

export default BookTable