import { toast } from 'react-toastify'

export const success = (message = '') =>
    toast.success(message, { autoClose: 1000 })
export const error = (error = 'Opss... an error!') =>
    toast.error(error, { autoClose: 1000 })
