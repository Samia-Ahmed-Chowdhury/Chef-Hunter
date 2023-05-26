import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import ChefDetails from '../pages/ChefDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import BlogComponents from '../components/BlogComponents/BlogComponents';
import ProtectedRoute from '../protectedRoute/protectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
                loader: () => fetch('https://as-10-server-side-samia-ahmed-chowdhury.vercel.app/chef_data')
            },
            {
                path: "chef_data/:id",
                element: <ProtectedRoute><ChefDetails></ChefDetails></ProtectedRoute>,
                errorElement: <ErrorPage />,
                loader: ({ params }) => fetch(`https://as-10-server-side-samia-ahmed-chowdhury.vercel.app/chef_recipe/${params.id}`)
            },
            {
                path: "blog",
                element: <BlogComponents />,
                loader:()=>fetch('https://as-10-server-side-samia-ahmed-chowdhury.vercel.app/blogs'),
                errorElement: <ErrorPage />,
            },
            {
                path: "login",
                element: <Login />,
                errorElement: <ErrorPage />,
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <ErrorPage />,
            },
        ]
    },

   
])

export default router