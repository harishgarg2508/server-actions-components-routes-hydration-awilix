import axios from "axios";

export const SubmitForm = async (data: FormData) => {
  try {
    const response = await axios.post("/api/formroute", data);
    console.log('response: ', response);

    return response.data;
  } catch (error) {
    console.error("Error submitting form", error);
    throw error;
  }
};
