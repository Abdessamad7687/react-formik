
import './App.css'
const App = () => {
  return (
    <div className="container mt-5">
            <form className="form" id="form" autoComplete='off'>
                
                <div className="form-group col-md-6 mx-auto mt-3">
                <label htmlFor="Username">Username</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-6 mx-auto mt-3">
                <label htmlFor="Email">Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group col-md-6 mx-auto mt-3">
                <label htmlFor="Phone">Phone</label>
                    <input type="number" className="form-control" />  
                </div>


                <div className="form-group col-md-4 mx-auto mt-3">
                    <button className="btn text-white w-100">
                        Submit new Person
                    </button>
                </div>
            </form>
        </div>
  )
}

export default App