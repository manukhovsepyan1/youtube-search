import { GraphQLClient } from 'graphql-request';
const url = import.meta.env.VITE_BACK_URL;
export const client = new GraphQLClient(url);
