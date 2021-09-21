import { EAppointment } from "client/constants/appointment";
import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
  [EAppointment.NAME]: yup.string().required(),
  [EAppointment.EMAIL]: yup.string().required(),
  [EAppointment.SERVICE]: yup.string().required(),
  [EAppointment.PHONE_NUMBER]: yup.string().required(),
  [EAppointment.NOTES]: yup.string().required(),
  [EAppointment.DATE]: yup.string().required(),
  [EAppointment.TIME]: yup.string(),
});