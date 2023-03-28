import React from 'react'
import List from './List'

const App = () => {
    return (
        <div className="w-full min-h-screen pb-40 pt-5 light:bg-slate-50 dark:bg-slate-500">
            <div className="w-11/12 mx-auto h-full">
                <a
                    className="flex flex-row content-center text-sm light:text-gray-600 dark:text-gray-50 dark:hover:text-cyan-100 light:hover:text-cyan-600 hover:underline mb-4"
                    href="http://laszloekovacs@github.com"
                >
                    <img
                        className="w-5 h-5 mr-3"
                        src="./github-mark.svg"
                        alt="github logo"
                    />
                    <span>visit me on github</span>
                </a>
                <h1 className="text-xl text-center font-bold mb-5 ">
                    Tailwind CSS styling checklist
                </h1>
                <List />
            </div>
        </div>
    )
}

export default App
