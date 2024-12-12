'use client';

import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import 'swiper/css';
import { Container } from '~/styled-system/jsx';

type FormValues = {
  email: string;
};

export const Landing = () => {
  const { reset, register, handleSubmit, watch } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.post('/api/sendEmail', {
        email: data.email,
      });

      toast.success('Email successfully submitted');
      reset();
    } catch (error) {
      toast.error('Error submitting email');
    }
  };

  return <Container maxWidth="1920px" width="100%" mt={10}></Container>;
};
