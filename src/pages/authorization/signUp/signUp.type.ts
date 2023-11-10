import { TLogin } from "../login/login.type";

export type TSignUp = TLogin & {
  repeatPass: string;
  firstName: string;
  lastName: string;
};
