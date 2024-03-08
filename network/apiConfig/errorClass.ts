import APIError from '../../interfaces/errorInterface';

class CustomError extends Error implements APIError {
  constructor(code: number, message: string, description: string = '') {
    super(message);
    this.code = code;
    this.message = message;
    this.description = description;
  }
  code: number;
  message: string;
  description: string;
}

export default CustomError;
