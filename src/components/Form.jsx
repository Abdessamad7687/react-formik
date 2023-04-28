import React from 'react'

const Form = () => {
    return (
        <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
                <label for="name" className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
            </div>
            <div>
                <label for="email" className="text-sm">Email</label>
                <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
            </div>
            <div>
                <label for="message" className="text-sm">Message</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
        </form>
    )
}

export default Form