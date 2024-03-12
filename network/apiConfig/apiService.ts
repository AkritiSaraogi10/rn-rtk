import {AxiosError, AxiosResponse} from 'axios';
import APIResult from '../../interface/resultInterface';
import APIError from '../../interface/errorInterface';
import CustomError from './errorClass';
import CustomModal from '../../components/customModal';
import store from '../../app/store';
import {setNetworkVisibleToast} from '../../reducers/globalSlice';

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
  if (store.getState().global.hasInternet) {
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
      throw new CustomError(error.code, error.message, error.description);
    }
  } else {
    store.dispatch(setNetworkVisibleToast(true));
  }
}

function handleStatusCode(error: APIError) {
  const status = error.code;
  if (
    (status >= 300 && status < 400) ||
    (status >= 400 && status < 500) ||
    (status >= 500 && status < 600)
  ) {
    CustomModal({
      message: error.message,
      description: error.description,
      onClose: () => console.log('Modal closed'),
    });
  } else {
    console.error('Unhandled Error:', status);
  }
}
