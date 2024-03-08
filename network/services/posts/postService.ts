import APIError from '../../../interfaces/errorInterface';
import ApiHelper from '../../apiConfig/apiHelper';
import APIUriConfig from '../../apiConfig/appUriConfig';
import APIResult from '../../../interfaces/resultInterface';
import CustomError from '../../apiConfig/errorClass';
import PostRequestModel from '../../../requestModels/postRequestModel';
import PostModel from '../../../models/postModel';
import {Dispatch, UnknownAction} from '@reduxjs/toolkit';
import {
  setData,
  setError,
  setLoading,
  addPost,
} from '../../../reducers/postSlice';

class PostService {
  static baseUrl = 'https://jsonplaceholder.typicode.com';

  static async getAllPosts(dispatch: Dispatch<UnknownAction>) {
    const onSuccess = (result: APIResult<PostModel[]>) => {
      dispatch(setData(result.result));

      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      dispatch(setError(error.message));
      console.error('Error--> ' + error.message);
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/posts');
    const apiConfig = APIUriConfig.getHeaders();
    try {
      dispatch(setLoading(true));
      return await ApiHelper.get<PostModel[]>(
        uri,
        apiConfig,
        onSuccess,
        onFailure,
      );
    } catch (err) {
      throw err as CustomError;
    }
  }

  static async addPost(
    dispatch: Dispatch<UnknownAction>,
    requestBody: PostRequestModel,
  ) {
    const onSuccess = (result: APIResult<PostModel>) => {
      dispatch(addPost(result.result));

      console.log('Result-->', result);
    };
    const onFailure = (error: APIError) => {
      dispatch(setError(error.message));
      console.error('Error--> ' + error.message);
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/posts');
    const apiConfig = APIUriConfig.getHeaders();
    console.log(requestBody);
    try {
      dispatch(setLoading(true));
      return await ApiHelper.post<PostModel>(
        uri,
        requestBody,
        apiConfig,
        onSuccess,
        onFailure,
      );
    } catch (err) {
      throw err as CustomError;
    }
  }
}
export default PostService;
