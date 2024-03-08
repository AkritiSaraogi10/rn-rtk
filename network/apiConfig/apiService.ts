import {AxiosError, AxiosResponse} from 'axios';
import APIResult from '../../interfaces/resultInterface';
import APIError from '../../interfaces/errorInterface';
import CustomError from './errorClass';
import store from '../../app/store';
import {setErrorToast} from '../../reducers/globalSlice';

interface doAPICallOptions<T> {
  api: () => Promise<AxiosResponse<T, any>>;
  onSuccess: (result: APIResult<T>) => void;
  onFailure: (error: APIError) => void;
}

export async function doAPICall<T extends any>({
  api,
  onSuccess,
  onFailure,
}: doAPICallOptions<T>) {
  try {
    const response = await api();
    console.log(response.status);
    if (response.status >= 200 && response.status < 300) {
      const apiResult: APIResult<T> = {
        message: response.statusText,
        errors: {} as APIError,
        result: response.data,
      };
      onSuccess(apiResult);
      return apiResult;
    } else {
      const error: APIError = {
        description: response.statusText,
        message:
          response.statusText || 'An error occurred during the API call.',
        code: response.status || 500,
      };
      onFailure(error);
      throw new CustomError(error.code, error.message, error.description);
    }
  } catch (err) {
    console.log('catch--> ' + err);
    const axiosError = err as AxiosError;
    const error: APIError = {
      description: '',
      message:
        axiosError.response?.statusText ||
        'An error occurred during the API call.',
      code: axiosError.response?.status || 500,
    };
    onFailure(error);
    handleStatusCode(error);
    throw new CustomError(error.code, error.message, error.description);
  }
}

function handleStatusCode(error: APIError) {
  const status = error.code;
  if (
    (status >= 300 && status < 400) ||
    (status >= 400 && status < 500) ||
    (status >= 500 && status < 600)
  ) {
    store.dispatch(
      setErrorToast({message: error.message, status: true, code: status}),
    );
  } else {
    console.error('Unhandled Error:', status);
  }
}
