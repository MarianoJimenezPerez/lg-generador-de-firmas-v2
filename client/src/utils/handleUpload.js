import { makeRequest } from "./makeRequest";
export const handleUpload = async (fileUpload) => {
  try {
    const formData = new FormData();
    formData.append("files", fileUpload);

    const res = await makeRequest.post("/upload", formData);

    console.log(res.data[0]);
    const data = {
      name: res.data[0].name,
      url: res.data[0].url,
    };

    const res2 = await makeRequest.post("/employeds", { data });

    if (res2.status === 500) {
      throw new Error("Internal Server Error");
    }
  } catch (error) {
    console.log(error);
  }
};
