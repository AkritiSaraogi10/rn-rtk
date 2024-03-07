import APIError from '../../../interface/errorInterface';
import ApiHelper from '../../apiConfig/apiHelper';
import APIUriConfig from '../../apiConfig/appUriConfig';
import APIResult from '../../../interface/resultInterface';
import CustomError from '../../apiConfig/errorClass';
import UserModel from '../../../interface/userModel';
import {
  setData,
  setError,
  setGetuserById,
  setLoading,
} from '../../../reducers/userSlice';
import {Dispatch, UnknownAction} from '@reduxjs/toolkit';

class UserService {
  static baseUrl = 'https://jsonplaceholder.typicode.com';

  static async getAllUsers(dispatch: Dispatch<UnknownAction>) {
    const onSuccess = (result: APIResult<UserModel[]>) => {
      dispatch(setData(result.result));
      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      console.error('Error in UserService--> ', error.message);
      dispatch(setError(error.message));
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/users');
    const apiConfig = APIUriConfig.getHeaders();
    try {
      dispatch(setLoading(true));
      return await ApiHelper.get<UserModel[]>(
        uri,
        apiConfig,
        onSuccess,
        onFailure,
      );
    } catch (err) {
      throw err as CustomError;
    }
  }

  static async getUserByID(dispatch: Dispatch<UnknownAction>, id: number) {
    const onSuccess = (result: APIResult<UserModel>) => {
      dispatch(setGetuserById(result.result));
      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      console.error('Error in UserService--> ', error.message);
      dispatch(setError(error.message));
    };
    const uri = APIUriConfig.getUri(this.baseUrl, `/users/${id}`);

    const apiConfig = APIUriConfig.getHeaders();
    try {
      dispatch(setLoading(true));
      return ApiHelper.get<UserModel>(uri, apiConfig, onSuccess, onFailure);
    } catch (err) {
      throw err as CustomError;
    }
  }
}

export default UserService;
