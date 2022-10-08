import React from 'react';

// Можно использовать любой пакет для генерации уникальных строк
// import { nanoid } from "nanoid";

// export class FormContacts extends React.Component {
//   contactInputId = nanoid();

//   render() {
//     return (
//       <form>
//         <label htmlFor={this.contactInputId}></label>
//         <input type="text" name="contacts" id={this.contactInputId} />
//       </form>
//     );
//   }
// }

import { Field, Formik } from 'formik';

// export const FormContacts = () => {
//   state = {
//     name: '',
//     number: ''
//   };
// }

//   handleChange = event => {
//     this.setState({ name: event.currentTarget.value.toLowerCase() })
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.name.trim() === '') {
//       return alert('Enter contacts name');
//     }
//     this.props.onSubmit({ ... this.state });
  
//   }

//   render(){
  
//     return (
          
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );

  
  
//   }
// }