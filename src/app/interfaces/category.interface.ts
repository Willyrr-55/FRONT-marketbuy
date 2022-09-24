import { PhotoI } from "./photo.interface";

export interface CategoryI
{
  _id?:string,
  name:string,
  description:string,
  status:boolean,
  files?: File[],
  photo?:PhotoI
}
