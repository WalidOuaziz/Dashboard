import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: ["User", "Products", "Customers"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
        }),
        getTransaction: build.query({
            query: () => ({
                url : "client/transaction",
                method: 'GET',
                // params : { page, pageSize,sort, search }
            }),
            providesTags: ["Transaction"],
        }),
        getGeography: build.query({
            query: () => "client/geography",
            providesTags: ["Geography"],
        }),
        getSales: build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
        }),
        getAdmin: build.query({
            query: () => "management/admin",
            providesTags: ["Admin"],
        }),
        getPerformance: build.query({
            query: () => "management/performance",
            providesTags: ["Performance"],
        }),
        getDashboard: build.query({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"],
        }),
    })
})


export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminQuery,
    useGetPerformanceQuery,
    useGetDashboardQuery
} = api;