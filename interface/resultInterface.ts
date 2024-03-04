import APIError from './errorInterface';

interface APIResult<T> {
  code?: string;
  message: string;
  errors: APIError;
  result: T;
}

// const book1 : Book={

// }

// const book2 = new Book()

export default APIResult;
