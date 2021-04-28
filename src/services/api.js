import Axios from 'axios';

const companiesEndpoint = 'http://localhost:8080/companies';

export const getCompanies = async () => {
  return await Axios.get(companiesEndpoint);
};
