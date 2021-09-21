import { ModelData } from "./services.types";
import { IContact } from "../types/contact";
import { postRequest } from "./utils";

export const createContact = (data: IContact) =>
  postRequest<ModelData<IContact>>(`/contacts`, data);

