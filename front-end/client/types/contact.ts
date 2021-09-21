import { EContact } from "client/constants/contact";
import { IModel } from "./model";

export interface IContact extends IModel {
  [EContact.COMMENT]: string
  [EContact.EMAIL]: string
  [EContact.FIRST_NAME]: string
}