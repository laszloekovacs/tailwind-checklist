import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import List from './List'

const client = new QueryClient()

const App = () => {
    return (
        <div className="w-full mb-40">
            <div className="w-11/12 mx-auto">
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
