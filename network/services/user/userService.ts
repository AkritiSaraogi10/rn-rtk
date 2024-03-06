import APIError from '../../../interface/errorInterface';
import ApiHelper from '../../apiConfig/apiHelper';
import APIUriConfig from '../../apiConfig/appUriConfig';
import APIResult from '../../../interface/resultInterface';
import CustomError from '../../apiConfig/errorClass';
import UserModel from '../../../interface/userModel';
import {setData, setError, setLoading} from '../../../reducers/userSlice';
import {Dispatch, UnknownAction} from '@reduxjs/toolkit';

class UserService {
  static baseUrl = 'https://jsonplaceholder.typicode.com';

  static async getAllUsers(dispatch: Dispatch<UnknownAction>) {
    const onSuccess = (result: APIResult<UserModel[]>) => {
      dispatch(setData(result.result));
      dispatch(setError(''));
      dispatch(setLoading(false));
      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      console.error('Error in UserService--> ', error.message);
      dispatch(setError(error.message));
      dispatch(setLoading(false));
      dispatch(setData([]));
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
}
export default UserService;
