import { combineReducers } from "redux";
import MessageReducer from "./MessageReducer";
import PersonalInfoReducer from "./PersonalInfoReducer";

export const rootReducer = combineReducers({
  messages: MessageReducer,
  personalInfo: PersonalInfoReducer
});
