import { User, UserProps } from './models/User';
import { Collection } from './models/Collections';
import { UserForm } from './views/UserForm';
import { UserList } from './views/UserList';


const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});


users.on('change', () => {

  const root = document.getElementById('root');
  
  if (root) {
    new UserList(root, users).render();
    //const userForm = new UserForm( root, user );
    
    
    
    //userForm.render();
  } else {
    throw new Error('Root element not found');
  }
})
//user.trigger('change');




users.fetch();


 
// // user.set({ name: 'newname' });
// user.on('change', () => {
//     console.log('Change');
// });
// user.on('change', () => {
//     console.log('Change');
// });
// user.on('change', () => {
//     console.log('Save was triggered');
// });

// user.trigger('grouund zeroooo')


//console.log(user.get('name'));














