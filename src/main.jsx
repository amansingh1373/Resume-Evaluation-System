import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SelectionCards from './pages/selection.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Student from './pages/student.jsx'
import Hr from './pages/hr.jsx'
import Result from './pages/result.jsx'

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
                    element: <Outlet />,
                    children: [
                        {
                            path:"",
                            element: <Student />
                        },
                        {
                            path:"result",
                            element: <Result />
                        }
                    ]
                },
                {
                    path:"hr",
                    element: <Outlet />,
                    children: [
                        {
                            path:"",
                            element: <Hr />
                        },
                        {
                            path:"result",
                            element: <Result />
                        }
                    ]
                }
            ]
        },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)

