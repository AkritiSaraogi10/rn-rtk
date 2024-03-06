import APIError from '../../../interface/errorInterface';
import ApiHelper from '../../apiConfig/apiHelper';
import APIUriConfig from '../../apiConfig/appUriConfig';
import APIResult from '../../../interface/resultInterface';
import CustomError from '../../apiConfig/errorClass';
import PostRequestModel from '../../../requestModels/postRequestModel';
import PostModel from '../../../interface/postModel';

class PostService {
  static baseUrl = 'https://jsonplaceholder.typicode.com';

  static async getAllPosts() {
    const onSuccess = (result: APIResult<PostModel[]>) => {
      console.log('Result-->', JSON.stringify(result));
    };
    const onFailure = (error: APIError) => {
      console.error('Error--> ' + error.message);
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/posts');
    const apiConfig = APIUriConfig.getHeaders();
    try {
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

  static async addPost(requestBody: PostRequestModel) {
    const onSuccess = (result: APIResult<PostModel>) => {
      console.log('Result-->', result);
    };
    const onFailure = (error: APIError) => {
      console.error('Error--> ' + error.message);
    };
    const uri = APIUriConfig.getUri(this.baseUrl, '/posts');
    const apiConfig = APIUriConfig.getHeaders();
    console.log(requestBody);
    try {
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
