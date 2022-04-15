import { SavedFile } from "./saved-file";

export interface Tashkilot{
    id:number;
    name:string;
    address:string;
    description:string;
    photo:SavedFile;
    phone:Number;
}