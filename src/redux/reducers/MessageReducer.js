import { TAKE_MESSAGES_DATA } from "../constants/action_types";

const intialState = {
  message_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_MESSAGES_DATA:
      const dataMessages = action.payload
      return {
        ...state,
        message_data: dataMessages,
      };
    default:
      return state;
  }
}
