import { Events } from "./Events";
import axios, { AxiosResponse } from 'axios';



export class Collection<T, K> {
    models: T[] = [];
    events: Events = new Events();
    //  rootUrl = 'http://localhost:3000/users'

    constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
       axios.get(this.rootUrl).then((response: AxiosResponse ) => {
          response.data.forEach((value: K) => {
            this.models.push(this.deserialize(value));
          });

          this.trigger('change');
       }); 
    }
}














