import User from "../components/User";
export default function UserList({users}) {
return <>
<h1>usersList</h1>
{users.map((users) => {
        return <div key={users.id}>
            {/* <p>{user.name}</p>
            <p>{user.email}</p> */}
            <User user={users}/>
        </div>
    })
}
</>
};
export async function getStaticProps (){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json();
    // console.log(data);
    return {
      props :{
          users:data,
      },
    }
  };