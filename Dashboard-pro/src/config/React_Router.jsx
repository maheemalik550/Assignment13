
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Foods } from '../Sidebar/Foods'
import { Chat } from '../Sidebar/Chat'
import { Calender } from '../Sidebar/Calender'
import { Customer } from '../Sidebar/Customer'
import { Customer_Details } from '../Sidebar/Customer_Details'
import { Analytics, Reviews, Wallet } from '@mui/icons-material'
import { Order_Details } from '../Sidebar/Order_Details'
import { Order_list } from '../Sidebar/Order_list'
import { Layout } from '../screen/layout'
import { Dashboard1 } from '../Sidebar/Dashboard1'




const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="" element={<Layout />}>
                <Route path="Dashboard" element={<Dashboard1/>} />
                <Route path="chat" element={<Chat />} />
                <Route path="Anaylytics" element={<Analytics />} />
                <Route path="Calender" element={<Calender />} />
                <Route path="Customer" element={<Customer />} />
                <Route path="Customer_Details" element={<Customer_Details />} />
                <Route path="Reviews" element={<Reviews />} />
                <Route path="Order_Details" element={<Order_Details />} />
                <Route path="Order_list" element={<Order_list />} />
                <Route path="Wallet" element={<Wallet />} />
                <Route path="food" element={<Foods />} />

            </Route>
       </Route>
    )
)

export const React_Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

// export {React_Router}
