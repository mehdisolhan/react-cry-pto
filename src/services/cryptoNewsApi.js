import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
  "x-rapidapi-host": process.env.REACT_APP_RAPID_BINGNEWS_HOST,
};

const baseUrl = process.env.REACT_APP_RAPID_BINGNEWS_BASEURL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&setLang=tr&mkt=tr-TR&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
