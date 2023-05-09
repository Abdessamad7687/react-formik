import Title from "./components/Title"
import './App.css'
import * as Yup from 'yup'
import { useState } from 'react'


const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must be a number')
        .required('Phone number is required'),
})


const App = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
    })

    const [formErrors, setFormErrors] = useState({})
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await schema.validate(formData, { abortEarly: false })

        } catch (err) {
            const errors = {};
            err.inner.forEach((e) => (errors[e.path] = e.message))
            setFormErrors(errors)
        }
    }
    return (
        <div className="container mt-5">
            <Title />
            <form className="form" id="form" autoComplete='off' onSubmit={handleSubmit}>
                <div className="form-group col-md-6 mx-auto mt-3">
                    <label htmlFor="Username">Username</label>
                    <input type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="form-control" />
                    {formErrors.username && (
                        <div className="text-danger">{formErrors.username}</div>
                    )}
                </div>


                <div className="form-group col-md-6 mx-auto mt-3">
                    <label htmlFor="Email">Email</label>
                    <input type="text"
                    name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control" />
                    {formErrors.email && (
                        <div className="text-danger">{formErrors.email}</div>
                    )}
                </div>

                <div className="form-group col-md-6 mx-auto mt-3">
                    <label htmlFor="Phone">Phone</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                    {formErrors.phone && (
                        <div className="text-danger">{formErrors.phone}</div>
                    )}
                </div>


                <div className="form-group col-md-4 mx-auto mt-3">
                    <button className="btn text-white w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default App
