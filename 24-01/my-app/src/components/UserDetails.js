import React from "react";

const UserDetails = ({ user }) => {
  //   let user = props.user;
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>Email: {user.email}</h5>
    </div>
  );
};

// class UserDetails extends Component {
//   user = this.props.user;
//   render() {
//     //   let {user} = this.props.user;
//     return (
//       <div>
//         <h3>{this.user.name}</h3>
//         <h5>Email: {this.user.email}</h5>
//       </div>
//     );
//   }
// }

export default UserDetails;
