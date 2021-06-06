import axios from 'axios';

// для запросов без авторизации
const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})

// для авторизованных
const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}