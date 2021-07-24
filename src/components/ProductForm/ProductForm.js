import { FormWrap, InputForm, TextareaForm, Button } from './ProductForm.style';

const ProductForm = () => {
  return (
    <FormWrap>
      <InputForm type="text" name="name" placeholder="Name" />
      <InputForm type="text" name="type" placeholder="Type" />
      <InputForm type="text" name="color" placeholder="Color" />
      <InputForm type="text" name="size" placeholder="Wheel size" />
      <InputForm type="text" name="price" placeholder="Price" />
      <InputForm type="text" name="id" placeholder="ID (slug): ХХХХХХХХХХХХХ" />
      <TextareaForm name="textarea" placeholder="Description" />
      <Button type="submit">Save</Button>
      <Button type="button">Clear</Button>
    </FormWrap>
  );
};

export default ProductForm;
