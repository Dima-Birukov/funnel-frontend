import {ApiResponseType} from '../../questions/services/question-api.service';

export interface SessionResponseDto {
  guid: string | null;
  loginResponse: ApiResponseType;
}

export class FilterFields {

  constructor(public businessName: string | null = '',
              public email: string | null = '',
              public reference: string | null = '',
              public startDate: string | null = '') {
  }
}

export interface PolicyDto {
  policyID: string;
  businessName: string;
  email: string;
  policyRef: string;
  policyStartDate: string;
}

export interface PolicyViewResponseDto {
  policyResponse: ApiResponseType;
  policyList: Array<PolicyDto>;
}

export interface PolicyAddressResponseDto {
  policyResponse: ApiResponseType;
  policyFullAddress: ApiResponseType;
}

export class PolicyUpdateDto{
  constructor(public newEmail: string,
              public address: string,
              public startDate: string,
              public email: string | null){}
}

export interface PolicyResponseDto{
  policyResponse: ApiResponseType;
}


