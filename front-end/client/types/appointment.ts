import { EAppointment } from "client/constants/appointment";
import { IModel } from "./model";

export interface IAppointment extends IModel {
  [EAppointment.NAME]: string
  [EAppointment.EMAIL]: string
  [EAppointment.NOTES]: string
  [EAppointment.PHONE_NUMBER]: string
  [EAppointment.SERVICE]: string
  [EAppointment.TIME]: string
  [EAppointment.DATE]: string
}