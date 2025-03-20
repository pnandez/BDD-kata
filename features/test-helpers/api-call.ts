import { AccountApi } from '../../src/app/api';




type AccountApiEndpoints = keyof typeof AccountApi;

export function apiCall(endpoint: AccountApiEndpoints, payload: Record<string, any>) {
  return AccountApi[endpoint](payload);
}