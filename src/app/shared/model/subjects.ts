import { ScaleType } from "chart.js";
import { SavedFile } from "./saved-file";
import { SType } from "./stype";

export interface Subjects{
    id:number;
    name:string;
    address:string;
    description:string;
    photo:SavedFile;
    phone:Number;
    type:SType;
}