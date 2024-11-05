
import { APP_ENV } from '../constants/env';
import { fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const createBaseQuery = (endpoint: string) =>
    fetchBaseQuery({
        baseUrl: `${APP_ENV.API_URL}/${endpoint}/`
    })

// export const getBaseQueryWithAuth = (endpoint: string)=>{
//     const baseQuery = fetchBaseQuery({
//         baseUrl: `${APP_ENV.SERVER_HOST}/${endpoint}/`,
//         prepareHeaders: (headers, { getState }) => {
//             const user = (getState() as RootState).user.user; 
//             if (user && new Date(user.exp * 1000) >= new Date()) {
//                 const token = (getState() as RootState).user.token; 
//                 headers.set('Authorization', `Bearer ${token}`);
//             }
//             return headers;
//         },
//     });
//     return async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//         const result = await baseQuery(args, api, extraOptions);
//         if (result.error && result.error.status === 401) {
//             console.error('Unauthorized! Redirecting to login...');
//             api.dispatch(logOut());
//             await removeFromSecureStore('authToken');
//         }
        
//         return result;
//     };    
// }