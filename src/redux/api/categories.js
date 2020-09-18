import api from "./index";
import { category } from "./urls";

export const getCategories = async () => {
    const { url, method } = category
    return await api(url, method[0], null, true)
};