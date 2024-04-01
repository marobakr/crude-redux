import React from 'react'
import ReactDOM from 'react-dom/client'
// connection your app with redux
import { Provider } from 'react-redux'
import App from './App'
// to pass store in Provider
import { store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
