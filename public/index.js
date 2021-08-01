class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users : []
      }
    }
    renderUser(user) {
        return(<button>{user.firstname+" "+user.lastname}</button>)
    }
    renderAllUsers() {
        this.f();
        return(this.state.users.map((user) => renderUser(user)))
    }
    f() {
      return 
      fetch('http://localhost:3000/api/printallusers')
      .then(response => response.json())
      .then(data => {
        this.setState({users : data})
      });
    }
    render() {
      return (
        this.renderAllUsers()
      )
    }
  }
  class Page extends React.Component {
    render() {
      return (
        <div>
            <button>Print All Users</button>
            <button>Generate 1000 Users</button>
            <UserList />
        </div>
      )
    }
  }

  ReactDOM.render(<Page />, document.getElementById('mydiv'))