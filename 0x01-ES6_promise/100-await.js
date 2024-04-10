import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const p1 = await uploadPhoto();
    const p2 = await createUser();

    return ({ photo: p1, user: p2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
