import { object, string } from "yup";
import { StringsResources } from "../../utils/stringsResources";

const { EMAIL_REQUIRED, PASSWORD_REQUIRED, VALID_EMAIL } =
  StringsResources.ERRORS;

export const loginValidationSchema = object({
  email: string().email(VALID_EMAIL).required(EMAIL_REQUIRED),
  password: string().required(PASSWORD_REQUIRED),
});
