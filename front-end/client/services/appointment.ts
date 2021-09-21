import { ModelData } from "./services.types";
import { postRequest } from "./utils";
import { IAppointment } from "client/types/appointment";

export const createAppointment = (data: IAppointment) =>
  postRequest<ModelData<IAppointment>>(`/appointments`, data);

