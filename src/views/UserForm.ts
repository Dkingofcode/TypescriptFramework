import { User, UserProps } from "../models/User";
import { View } from "./view";

export class UserForm extends View<User, UserProps> {  
  eventsMap(): {[key: string]: () =>  void } {
    return {
        'click:.set-age': this.onSetAgeClick,
        'click:.set-name': this.onSetNameClick,
        'click:.save-model': this.onSaveClick
     };
   }

   onSaveClick = (): void => {
      this.model.save();
   }

   onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  
  }



    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

   template(): string {
     return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        </div>
     `;
   }
    
//    onButtonClick(): void {
//     console.log('Hi there');
//    } 


    // template(): string {
    //     return  `
    //     <div>
    //     <h2>User Form</h3>
    //     <input  />
    //     <button>Click me </button>
    //     </div>
    //     `;
    // }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let key in eventsMap) {
            const [eventName, selector] = key.split(':');
            
            fragment.querySelectorAll(selector).forEach(element => {
              element.addEventListener(eventName, eventsMap[key])  
            });
        }
    }
    
    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content);
    }
    
}

























