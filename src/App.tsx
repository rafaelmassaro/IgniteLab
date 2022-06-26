import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { Router } from "./components/Router"
import { Event } from "./pages/Event"

function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  )
}

export default App
