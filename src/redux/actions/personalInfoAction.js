
import { API_URL } from '../../const/API';
import { getData } from '../../server/common';
import { TAKE_PERSONAL_INFO } from '../constants/action_types';

export const getPersonalInfo = () => {
    return (dispatch) => {
        getData(API_URL + "auth/me").then((res) => {
            console.log(res.data.data);
            dispatch({
                type: TAKE_PERSONAL_INFO,
                payload: res.data.data
            })
          });
    }
}