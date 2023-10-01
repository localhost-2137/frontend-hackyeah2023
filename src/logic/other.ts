export const formatQueryParams = (params: string[], paramName: string) => {
    const encodedParams = params.map(param => encodeURIComponent(param)).join(",");
    return encodeURIComponent(paramName) + "=" + encodedParams;
  };