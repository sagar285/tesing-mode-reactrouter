import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [list, setlist] = useState([]);

  const postdata = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/post", {
      name:name,
      age: age,
    });
    setlist([...list,{_id:result.data._id,name:name,age:age}])
  };
  const updatedata = async (id) => {
   const newage = prompt("enter new age");
   const newname = prompt("enter new name");
    const data = await axios.put(`http://localhost:3000/put/${id}`, {
      name: newname,
      age: newage,
    });
setlist(list.map((val)=>(
  val._id==id ? {_id:id,name:newname,age:newage}:val
)))
  };

  const deletedata = async (id)=>{
    const Delete = await axios.delete(`http://localhost:3000/delete/${id}`)
    setlist(list.filter((val)=>{
      return val._id != id
    }))
  }


  useEffect(() => {
    const getdata = async () => {
      const result = await axios.get("http://localhost:3000/get");
      console.log(result.data);
      setlist(result.data);
    };
    getdata();
  }, []);

  console.log("list data", list);

  return (
    <div>
      <div className="bg-blue-900 text-white font-bold flex flex-col w-full  min-h-[25vh] relative">
        <input
          type="text"
          className="w-[20rem] m-2 ml-[21rem] text-black"
          placeholder="enter your name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="number"
          className="w-[20rem] m-2 ml-[21rem]  text-black font-semibold"
          placeholder="enter your age"
          onChange={(e) => setage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-900 font-bold w-[5rem] rounded-md ml-[28rem]"
          onClick={postdata}
        >
          Submit
        </button>
      </div>

      {list.map((val, key) => (
        <div className="bg-blue-600 mt-[4rem] w-[18rem] h-[4rem] ml-[22rem] flex justify-end p-5 ">
          <h1 className=" text-xl font-semibold ml-2">{val.name}</h1>
          <h2 className=" text-xl font-semiboldml-2">{val.age}</h2>
          <button className="bg-black rounded-md text-white font-bold ml-3" onClick={()=>{updatedata(val._id)}}>Update</button>
          <button className="bg-black rounded-md text-white font-bold ml-3" onClick={()=>{deletedata(val._id)}}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
