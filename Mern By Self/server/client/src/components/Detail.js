import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
const Detail = () => {
    const history =useHistory();
    const [student,setStudent]=useState({
        name:'',
        subscribe:'',
        instafollower:'',
        githubfollower:'',
        gender:''

    });
    let name,value;
    const handleChange = (e)=>
    {
        name=e.target.name;
        value=e.target.value;

        setStudent({...student,[name]:value});
        
    }
  const handleClick= async (e)=>{
      e.preventDefault();
      
    const {name,subscribe,instafollower,githubfollower,gender}=student;
      const res=await fetch('http://localhost:4000/students',{
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          }, body:JSON.stringify({
            name,subscribe,instafollower,githubfollower,gender
        })
      });
      
      const data= await res.json();
      
      
      if(res.status===422 || !data)
      {
          window.alert("Invalid Registration !");
          console.log("Invalid Registration !");
          
      }
      else{
          window.alert(" Registration successfully  !");
          console.log(" Registration successfully !");
          history.push('/surprize');
      }
  }
    return (
        <>
           <div className="container p-2" style={{position:'relative',backgroundColor:'#caf0f8'}}>
               <div className="row mt-5">
                   <div className="col-md-12 col-12 col-lg-12 col-sm-12 mx-auto">
                        <form action="POST">
                            <label htmlFor="name" className="form-label text-info"><strong>Name:</strong></label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Name:" value={student.name} onChange={handleChange} className="form-control " />
                            <label htmlFor="subscribe" className="form-label text-info"><strong>Subscribers:</strong></label>
                            <input type="number" name="subscribe" id="subscribe" placeholder=" Your Subscribers:" value={student.subscribe} onChange={handleChange} className="form-control mt-1 mb-1" />
                            <label htmlFor="instafollower" className="form-label text-info"><strong>Instagram Followers:</strong></label>
                            <input type="number" name="instafollower" id="instafollower" placeholder=" Your Instagram Followers:" value={student.instafollower} onChange={handleChange} className="form-control mt-1 mb-1" />
                            <label htmlFor="githubfollower" className="form-label text-info"><strong>Github Followers:</strong></label>
                            <input type="number" name="githubfollower" id="githubfollower" placeholder=" Your Github Followers:" value={student.githubfollower} onChange={handleChange} className="form-control mt-1 mb-1" />
                            <label htmlFor="gender" className="form-label text-info"><strong>Gender:</strong></label>
                            <input type="text" name="gender" id="gender" placeholder=" Your Gender:" value={student.gender} onChange={handleChange} className="form-control mt-1 mb-1" />
                            
                            <input type="submit" value="Done" onClick={handleClick} className="py-1 px-2 mt-3 mb-4" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',fontWeight:'900'}} />
                        </form>
                   </div>
               </div>
           </div>
           
        </>
    )
}

export default Detail;
