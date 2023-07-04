// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses";


export default function App() {
  let userObj={
    name:'Ranjan',
    avatar:'https://avatars.githubusercontent.com/u/113471389?v=4',
    posts:100,
    followers:5000,
    address:'Durgauli'
  }
  return <>
  <Title/>
  <UserCard 
  avatar={userObj.avatar}
  name={userObj.name}
  posts={userObj.posts}
  followers={userObj.followers}
  />
  <Courses/>
  </>;
}
