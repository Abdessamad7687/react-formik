import React, { useState } from 'react'
import Title from './Title'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid ng-submitted">
            <Title title="React Formik" />

            {/* Name */}

            <div>
                <label for="name" className="block mb-1 ml-1">Name</label>
                <input id="name" value={name} type="text" placeholder="Your name" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800"
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div>
                <label for="email" className="block mb-1 ml-1">Email</label>
                <input id="email" value={email} type="email" placeholder="Your email" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Message */}
            <div>
                <label for="message" className="block mb-1 ml-1">Message</label>
                <textarea id="message" value={message} type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 dark:bg-gray-800" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            {/* Submit Button */}
            <div>
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-blue-400 focus:ring-blue-400 hover:ring-blue-400 dark:text-gray-900">Submit</button>
            </div>
        </form>
    )
}

export default Form