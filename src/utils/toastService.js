import { toast } from 'react-toastify';

// For any changes in toast you can refer https://fkhadra.github.io/react-toastify/introduction/

export const showToast = (message, props) => {
    const hasMessage = (message==='' || message===undefined) ? false : message
    toast(`${hasMessage || "Something went wrong ! try again later. "}`, {...props})
};