import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find(user => user.email === data.email);
    if (existingUser) {
      alert('User with this email already exists!');
      return;
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully! ✅');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>

      <div>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

