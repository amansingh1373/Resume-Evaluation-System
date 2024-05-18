import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SelectionCards from './pages/selection.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Student from './pages/student.jsx'

const router = createBrowserRouter([
        {
            path:"/",
            element: <App />,
            children:[
                {
                    path:"",
                    element: <SelectionCards />,
                },
                {
                    path:"student",
                    element: <Student />,
                },
                {
                    path:"hr",
                    element: <App />,
                }
            ]
        },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

