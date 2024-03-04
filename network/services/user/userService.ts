import UserInterface from '../../../interface/userInterface';
import APIError from '../../../interface/errorInterface';
import ApiHelper from '../../apiConfig/apiHelper';
import APIUriConfig from '../../apiConfig/appUriConfig';
import APIResult from '../../../interface/resultInterface';
import CustomError from '../../apiConfig/errorClass';
import {Dispatch, UnknownAction} from '@reduxjs/toolkit';
import {setErrorToast} from '../../../features/globalSlice';

class UserService {
  static baseUrl = 'https://jsonplaceholder.typicode.com';

  static async getAllUsers(dispatch: Dispatch<UnknownAction>) {
    const onSuccess = (result: APIResult<UserInterface[]>) => {
      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      dispatch(setErrorToast(error.message));
      console.error('Error--> ' + error.message);
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/users');
    const apiConfig = APIUriConfig.getHeaders();
    try {
      return await ApiHelper.get<UserInterface[]>(
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
