import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getAllBicycles } from 'redux/bicycles/bicyclesSelector';
import { addBicycle } from 'redux/bicycles/bicyclesActions';
import {
  FormWrap,
  InputForm,
  TextareaForm,
  Button,
  InputWrap,
  ErrorMessage,
  TextareaWrap,
} from './ProductForm.style';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(5, 'Must be at least 5 characters'),
  type: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(5, 'Must be at least 5 characters'),
  color: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(5, 'Must be at least 5 characters'),
  size: yup
    .number()
    .typeError('Size must be a number and required')
    .positive('Size must be greater than zero')
    .required('Is a required field'),
  price: yup
    .number()
    .typeError('Price must be a number and required')
    .positive('Price must be greater than zero')
    .required('Is a required field'),
  id: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(5, 'Must be at least 5 characters'),
  description: yup
    .string()
    .trim()
    .required('Is a required field')
    .min(5, 'Must be at least 5 characters'),
});

const Input = ({ label, type, register, errors, placeholder, errorID }) => (
  <InputWrap>
    <InputForm type={type} placeholder={placeholder} {...register(label)} />
    <ErrorMessage>{errorID ? errorID : errors[label]?.message}</ErrorMessage>
  </InputWrap>
);

const ProductForm = () => {
  const [errorID, setErrorID] = useState(null);
  const allBicycles = useSelector(getAllBicycles);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setErrorID(null);

    if (
      !allBicycles.filter(item => item.id === +data.id || item.id === data.id)
        .length
    ) {
      dispatch(addBicycle({ ...data, status: 'available' }));
      onReset();
    } else {
      setErrorID('Such an ID exists. Enter another ID');
    }
  };

  const onReset = () => {
    reset({});
  };

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="name"
        placeholder="Name"
        register={register}
        errors={errors}
      />

      <Input
        type="text"
        label="type"
        placeholder="Type"
        register={register}
        errors={errors}
      />

      <Input
        type="text"
        label="color"
        placeholder="Color"
        register={register}
        errors={errors}
      />

      <Input
        type="number"
        label="size"
        placeholder="Wheel size"
        register={register}
        errors={errors}
      />

      <Input
        type="number"
        label="price"
        placeholder="Price"
        register={register}
        errors={errors}
      />

      <Input
        type="text"
        label="id"
        placeholder="ID (slug): ХХХХХХХХХХХХХ"
        register={register}
        errors={errors}
        errorID={errorID}
      />

      <TextareaWrap>
        <TextareaForm placeholder="Description" {...register('description')} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
      </TextareaWrap>

      <Button type="submit">Save</Button>
      <Button type="button" onClick={onReset}>
        Clear
      </Button>
    </FormWrap>
  );
};

export default ProductForm;
