import { getData } from '../../server/common';
import { TAKE_MESSAGES_DATA } from '../constants/action_types';

export const getMessagesData = () => {
    return (dispatch) => {
        getData("auth/messages").then((res) => {
            dispatch({
                type: TAKE_MESSAGES_DATA,
                payload: res.data.data
            })
          });
    }
}