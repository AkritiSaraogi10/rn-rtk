import axios, {AxiosRequestConfig} from 'axios';
import APIError from '../../interface/errorInterface';
import {doAPICall} from './apiService';
import APIResult from '../../interface/resultInterface';
import CustomError from './errorClass';

class ApiHelper {
  static async get<T>(
    url: string,
    config: AxiosRequestConfig,
    onSuccess: (result: APIResult<T>) => void,
    onFailure: (error: APIError) => void,
  ): Promise<APIResult<T>> {
    try {
      return doAPICall<T>({
        api: () => axios.get<T>(url, config),
        onSuccess,
        onFailure,
      });
    } catch (err) {
      throw err as CustomError;
    }
  }

  static async post<T>(
    url: string,
    data: any,
    config: Record<string, string>,
    onSuccess: (result: APIResult<T>) => void,
    onFailure: (error: APIError) => void,
  ): Promise<APIResult<T>> {
    try {
      return doAPICall<T>({
        api: () => axios.post<T>(url, data, config),
        onSuccess,
        onFailure,
      });
    } catch (err) {
      throw err as CustomError;
    }
  }

  static async put<T>(
    url: string,
    data: any,
    config: Record<string, string>,
    onSuccess: (result: APIResult<T>) => void,
    onFailure: (error: APIError) => void,
  ): Promise<APIResult<T>> {
    try {
      return doAPICall<T>({
        api: () => axios.put<T>(url, data, config),
        onSuccess,
        onFailure,
      });
    } catch (err) {
      throw err as CustomError;
    }
  }

  static async delete<T>(
    url: string,
    config: Record<string, string>,
    onSuccess: (result: APIResult<T>) => void,
    onFailure: (error: APIError) => void,
  ): Promise<APIResult<T>> {
    try {
      return doAPICall<T>({
        api: () => axios.delete<T>(url, config),
        onSuccess,
        onFailure,
      });
    } catch (err) {
      throw err as CustomError;
    }
  }
}

export default ApiHelper;
