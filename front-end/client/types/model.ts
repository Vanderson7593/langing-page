import { EModel } from "client/constants/model";

export interface IModel {
  [EModel.ID]: string
  [EModel.CREATED_AT]: Date
  [EModel.UPDATED_AT]: Date
}