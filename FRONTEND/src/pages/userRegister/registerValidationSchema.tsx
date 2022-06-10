import { object, ref, string } from "yup";
import { StringsResources } from "../../utils/stringsResources";

const {
  NAME_REQUIRED,
  VALID_FULL_NAME,
  FULL_NAME_REQUIRED,
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
    .matches(/^([^0-9]*)$/, VALID_FULL_NAME)
    .matches(/^[a-z]{2,} [a-z]{2,}/gi, FULL_NAME_REQUIRED),
  email: string().email(VALID_EMAIL).required(EMAIL_REQUIRED_SECONDARY),
  password: string()
    .required(PASSWORD_REQUIRED_SECONDARY)
    .min(5, MIN_CHARACTERS),
  confirmPassword: string()
    .required(CONFIRM_PASSWORD)
    .oneOf([ref("password"), null], PASSWORDS_NEED_MATCH),
});
