
'use server';

export async function formSubmission(formData: FormData) {
  console.log('formData: ', formData);


  const name = formData.get('name')?.toString() || '';

  console.log("Submitted name:", name);

  return;
}



// import axios from "axios";

// interface FormData {
//   name: string;
 
// }

// export const formSubmition = async (formData: FormData) => {
//    const { name } = formData;

//    console.log('name: ', name);
    

// };



