import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import List from './List'

const client = new QueryClient()

const App = () => {
    return (
        <div className="w-full mb-40 mt-5">
            <div className="w-11/12 mx-auto">
                <a
                    className="flex flex-row content-center text-sm text-gray-600 hover:text-cyan-600 hover:underline mb-4"
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
                <QueryClientProvider client={client}>
                    <List />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default App
