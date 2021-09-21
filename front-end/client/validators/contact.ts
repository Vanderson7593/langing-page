import { EContact } from "client/constants/contact";
import { IContact } from "client/types/contact";
import * as yup from "yup";

export const contactSchema = yup.object().shape({
  [EContact.FIRST_NAME]: yup.string().required(),
  [EContact.EMAIL]: yup.string().required(),
  [EContact.COMMENT]: yup.string().required(),
});