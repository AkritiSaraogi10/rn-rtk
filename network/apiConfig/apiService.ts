import {AxiosError, AxiosResponse} from 'axios';
import APIResult from '../../interface/resultInterface';
import APIError from '../../interface/errorInterface';
import CustomError from './errorClass';
import CustomModal from '../../components/modal';

// data class VasBaseResult<T>(
//     @SerializedName("message") val message: String,
//     @SerializedName("results") val results: T,
//     @SerializedName("errors") var errors: List<ErrorResultBody>? = null
// )

// data class ErrorResultBody(
//     @SerializedName("code") var code: String?,
//     @SerializedName("message") var message: String?,
//     @SerializedName("description") var description: String?
// )

// data class PanData(
//     @SerializedName("pan") var panUrl: String? = null,
//     @SerializedName("panId") var panId: String? = null,
//     @SerializedName("date") var date: String? = null,
// )

// fun getPanData(
//     accessToken: String, request: PanDataRequestRequest
// ): Response<VasBaseResult<PanData>>

// remoteSource.getPanData(
//     accessToken = 12345, request = PanDataRequest(
//         panid
//     )
// )

// doAPICall(api = {
//     val location = Location(
//         latitude = 10.12,
//         longitude = 23.0
//     )
//     remoteSource.getPanData(
//         accessToken = 1234, request = PanDataRequest(
//             panid
//         )
//     )
// }, onSuccess = {
//     it.PanData
// })

// fun < T > doApiCall(
//     api: suspend(accessToken: String) -> Response<VasBaseResult<T>>,
//     onSuccess: suspend(result: VasBaseResult<T>) -> Unit)

// {
//     onSuccess(it)
// }

// interface doAPICallOptions<T> {
//     api: () => Promise<AxiosResponse<T, any>>;
//     onSuccess: (result: T) => void,
// }

// export async function doAPICall1<T>({api, onSuccess}: doAPICallOptions<T>) {
//   try {
//     const response = await api();
//     const apiResult: APIResult<T> = {
//       message: response.statusText,
//       errors: [] as unknown as APIError,
//       result: response.data,
//     };
//     onSuccess(apiResult);
//     return apiResult;
//   } catch (err) {
//     const error = {} as APIError;
//     return error;
//   }
// }

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
    CustomModal({
      message: error.message,
      description: error.description,
      onClose: () => console.log('Modal closed'),
    });
  } else {
    console.error('Unhandled Error:', status);
  }
}
