import { View } from "./view";
import { User, UserProps } from '../models/User';
import { Events } from '../models/Events';

export class UserShow extends View<User, UserProps> {
   eventsMap(): { [key: string]: () => void; } {
       throw new Error("Method not implemented.");
   }
   template(): string {
       return `
         <div>
           <h1>User Detail</h1>
           <div>User Name: ${this.model.get('name')}</div>
           <div>User Age: ${this.model.get('age')}</div>
           </div>
       `;
   }
}
























