import axios from 'axios';
import {AxiosResponse} from 'axios';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Events } from './Events';
import { Sync } from './Sync';


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;  
}

//type Callback = () => void;
const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
   static buildUser(attrs: UserProps): User {
      return new User (
        new Attributes<UserProps>(attrs),
        new Events(),
        new Sync<UserProps>(rootUrl)
      )
   }  
    

   setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
   }
  }
    
    // get(propName: string): (number | string) {
    //    return this.data[propName];
    // }

   













