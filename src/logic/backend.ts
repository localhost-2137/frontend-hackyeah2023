const BACKEND_ORIGIN = "https://hackyeah.filipton.space/api/";

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

export const getAllUniversities = async () => {
    const response = await backendRequest("search?cities&subjects");
    return await response.json();
}

export const getAllUniversitiesForMap = async () => {
    const response = await backendRequest("universities/location");
    return await response.json();
}

export const searchUniversities = async (query: string) => {
    const response = await backendRequest("search" + query);
    return await response.json();
};

export const getSingleUniversity = async (id: number) => {
    const response = await backendRequest("university/" + id);
    return await response.json();
};

export const getAnswersByUserInputFromSurvey = async (userInput: any) => {
    const response = await backendRequest("ai", "POST", userInput);
    return await response.json();
};