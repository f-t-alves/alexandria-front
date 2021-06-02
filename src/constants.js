const prod = {
    url: {
        API_URL: "https://alexandria-db-api.herokuapp.com/api"
    }
};
const dev = {
    url: {
        API_URL: 'http://localhost:3000/api'
    }
};
export const config = process.env.NODE_ENV === 'development' ?dev: prod;