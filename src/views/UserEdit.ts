import { View } from './view';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShows';


export class UserEdit extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void; } {
        throw new Error('Method not implemented.');
    }
    regionsMap(): { [key: string]: string; } {
        return {
            userShow: '.user-show',
            UserForm: '.user-form',
        };
    }

    onRender = (): void => {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.UserForm, this.model).render();  
    }

    template(): string {
        return `
          <div>
            <div class="user-show"></div>
            <div class="user-form"></div>
          </div>  
        `;
    }
} 






























