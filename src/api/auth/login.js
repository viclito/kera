import { useMutation } from '@tanstack/react-query';

import api from 'src/api/api';

import DataService from '../DataService';

// ----------------------------------------------------------------------

const Login = () =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await DataService.post(api.SignInURL, payload);
      if (response.status === 200) {
        const { data } = response;
        localStorage.setItem('accessToken', data?.data?.access); // Store token
        return data;
      }
      throw new Error('Sign-in failed');
    },
    onSuccess: async (response) => {},
    onError: () => {},
  });

const SendOpt = () =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await DataService.post(api.SendOtp, payload);
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
      throw new Error('Sign-in failed');
    },
    onSuccess: async (response) => {},
    onError: () => {},
  });

const VerifyOpt = () =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await DataService.post(api.VerifyOtp, payload);
      if (response.status === 200) {
        const { data } = response;
        localStorage.setItem('accessToken', data?.data?.access); // Store token
        localStorage.setItem('userType', data?.data?.type); 
        return data;
      }
      throw new Error('Sign-in failed');
    },
    onSuccess: async (response) => {},
    onError: () => {},
  });

const Register = () =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await DataService.post(api.Register, payload);
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
      throw new Error('Sign-in failed');
    },
    onSuccess: async (response) => {},
    onError: () => {},
  });

const CompleteBasicRegistration = () =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await DataService.patch(api.CompleteRegistrationURL, payload);
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
      throw new Error('Sign-up failed');
    },
    onSuccess: async (response) => {},
    onError: () => {},
  });

const useLoginQuery = { Login, SendOpt, VerifyOpt, CompleteBasicRegistration , Register};

export default useLoginQuery;
