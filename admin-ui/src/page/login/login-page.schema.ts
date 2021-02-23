import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('error.email').required('error.req'),
  password: Yup.string().required('error.req').min(4, "error.min"), 
})