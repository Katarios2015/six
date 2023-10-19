import axios from "axios";


// В случае недоступности сервера отображается информационное сообщение. Дизайн // сообщения остаётся на усмотрение разработчика.
// Сервер принимает данные в виде JSON объекта.

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};
// функция производитель createAPI
const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail); // interceptors(перехватчики) основное отличие от fetch

  return api;
};

export default createAPI;
