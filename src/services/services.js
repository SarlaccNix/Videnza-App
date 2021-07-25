import {CasePostGet, GetAllCases} from '../config/API';
import axios from 'axios';

export const CaseUpload = async CaseData => {
  console.log('Data del form SAPEEE', CaseData);
  return await axios
    .post(
      CasePostGet,
      {data: CaseData},
      {headers: {'Content-Type': 'application/json'}},
    )
    .then(res => {
      console.log('Response Watcher', res);
      // const status = res.data.status
      // const message = res.data.message
      return res;
    })
    .catch(error => console.log(error.message));
};

export const GetCases = async () => {
  return await axios
    .get(GetAllCases, {headers: {'Content-Type': 'application/json'}})
    .then(res => {
      console.log('Response Watcher', res);
      // const status = res.data.status
      // const message = res.data.message
      return res;
    })
    .catch(error => console.log(error.message));
};
