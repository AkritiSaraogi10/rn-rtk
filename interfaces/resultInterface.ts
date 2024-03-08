import APIError from './errorInterface';

interface APIResult<T> {
  code?: string;
  message: string;
  errors: APIError;
  result: T;
}

export default APIResult;
