import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import GroupList from './GroupList'

const client = new QueryClient()

const App = () => {
  return (
    <div>
      <h1>Tailwind CSS styling checklist</h1>
      <QueryClientProvider client={client}>
        <GroupList />
      </QueryClientProvider>
    </div>
  )
}

export default App
