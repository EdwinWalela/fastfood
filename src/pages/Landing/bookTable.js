function BookTable(){
  return (
    <div className="mb-12">
      <h2 className="mb-4 font-medium text-lg">Book A Table</h2>
      <form className="w-11/12 bg-white rounded-md shadow-lg py-4">
        <div className="flex justify-center p-4">
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Date</label>
            <input type="date" className="block py-2 px-4 border-2"/>
          </div>
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Time</label>
            <input type="time" className="block py-2 px-4 border-2"/>
          </div>
          <div className="justify-center-auto mr-8">
            <label className="block font-medium">Email</label>
            <input type="email" className="block py-2 px-4 border-2"/>
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