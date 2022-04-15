import { SavedFile } from "./saved-file";
import { RequestType } from "./request-type";
import { Status } from "./status";
import { Tashkilot } from "./tashkilot";
import { User } from "./user";

export interface Request{
       id:number;
       title:string;
       text:string;
       type:RequestType;
       user:User;
       status:Status;
      tashkilot:Tashkilot;
      savedFile:SavedFile
}