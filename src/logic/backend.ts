const BACKEND_ORIGIN = "http://10.250.166.200:8080/";

const backendRequest = (path: string, method: string, body?: unknown) => {
  return fetch(BACKEND_ORIGIN + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getAllCities = async () => {
  const response = await backendRequest("cities", "GET");
  return await response.json();
};
