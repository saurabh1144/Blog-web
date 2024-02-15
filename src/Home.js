// import { useEffect, useState } from "react";

// const Home = () => {
//   // var name="Saurabh";
//   const [name, setName] = useState("Saurabh");
//   const [age, setAge] = useState(25);
//   const [count, setCount] = useState(0);

//   function changeVal() {
//     setName("Ms Dhoni");
//     setAge(41);
//   }
//   // useEffect(()=>{
//   //     changeVal()
//   //     console.log(name);

//   // },[])

//   function clickCount() {
//     setCount((count) => (count += 1));
//     // let cou=document.getElementById("para");
//     // cou.innerHTML= "You clicked " + count;
//   }

//   return (
//     <div className="home">
//       <h2>Home page</h2>
//       <hr />
//       <button onClick={clickCount}>Click me</button>
//       <p id="para"> You Clicked {count}</p>
//       <br />
//       <button onClick={changeVal}> Click To Change</button>
//       <h4>
//         {name} is {age} year
//       </h4>
//     </div>
//   );
// };

// export default Home;
