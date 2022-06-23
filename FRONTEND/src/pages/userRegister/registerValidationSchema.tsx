import { object, ref, string } from "yup";
import { StringsResources } from "../../utils/stringsResources";

const {
  NAME_REQUIRED,
  VALID_FULL_NAME,
  PASSWORDS_NEED_MATCH,
  CONFIRM_PASSWORD,
  MIN_CHARACTERS,
  EMAIL_REQUIRED_SECONDARY,
  PASSWORD_REQUIRED_SECONDARY,
  VALID_EMAIL,
} = StringsResources.ERRORS;

export const registerValidationSchema = object({
  name: string()
    .required(NAME_REQUIRED)
    .matches(/^([^0-9]*)$/, VALID_FULL_NAME),
  email: string().email(VALID_EMAIL).required(EMAIL_REQUIRED_SECONDARY),
  password: string()
    .required(PASSWORD_REQUIRED_SECONDARY)
    .min(5, MIN_CHARACTERS),
  confirmPassword: string()
    .required(CONFIRM_PASSWORD)
    .oneOf([ref("password"), null], PASSWORDS_NEED_MATCH),
});
