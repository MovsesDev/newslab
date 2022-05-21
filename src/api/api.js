import axios from "axios";

const instance = axios.create({
 baseURL: 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 '
})

export const catsAPI = {
    getPics(pageSize = 10) {
        return instance.get(`search?limit=${pageSize}&page=1&category_ids=1`).then(res => {
            console.log(res.data);
            return res.data})
    }
}