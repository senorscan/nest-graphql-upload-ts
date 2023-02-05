import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';

export const UPLOAD_IMAGE_QUERY = gql`
  mutation UploadImage($input: UploadImageInput!) {
    uploadImage(input: $input)
  }
`;

const useUploadImage = () => {
  const [uploadImage, { data, error, loading }] = useMutation(UPLOAD_IMAGE_QUERY)

  return {
    uploadImage,
    data: data?.uploadImage ?? null,
    error,
    loading,
  }
}

const FileUpload = () => {
  const [file, setFile] = useState(null);
  
  const { uploadImage } = useUploadImage()

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.warn(file)
    uploadImage({
      variables: {
        input: {
          imageFile: file
        }
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload
