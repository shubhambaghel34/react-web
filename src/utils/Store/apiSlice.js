import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchbaseQuery({
//     baseUrl: "https://dummyjson.com/",
//   }),
//   endpoints: (builder) => ({
//     getAllProducts: builder.query({
//       query: () => "products",
//     }),
//   }),
// });

export const productsApi = createApi({
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllProducts } = productsApi;
