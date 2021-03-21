import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

// TS for props
interface UserSearchProps {
  users: User[];
}

// TS for state
interface UserSearchState {
  name: string;
  user: User | undefined;
}

// 3.4. TypeScript with Class Components
// TS for props
class UserSearch extends Component<UserSearchProps> {
  // TS for state
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  // arrow fn to solve context issue
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
