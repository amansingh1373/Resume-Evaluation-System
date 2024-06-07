import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SelectionCards from './pages/selection.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Student from './pages/student.jsx'
import Hr from './pages/hr.jsx'
import Result from './pages/result.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import { AuthProvider } from "./context/authContext";

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
                },
                {
                    path:"login",
                    element: <Login />,
                },
                {
                    path:"register",
                    element: <Register />,
                }
            ]
        },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>,
)

