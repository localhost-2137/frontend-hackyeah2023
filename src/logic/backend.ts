const BACKEND_ORIGIN = "http://10.250.166.200:8080/";

const backendRequest = (path: string, method = "GET", body?: unknown) => {
  return fetch(BACKEND_ORIGIN + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getAllCities = async () => {
  const response = await backendRequest("cities");
  return await response.json();
};

export const searchUniversities = async (query: string) => {
  const response = await backendRequest("search" + query);
  return await response.json();
};

export const getSingleUniversity = async (id: number) => {
  const response = await backendRequest("university/" + id);
  return await response.json();
};