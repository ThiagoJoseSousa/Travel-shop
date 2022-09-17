import React, { useEffect, useState } from "react";
import { useAuth, upload } from "../firebase";

export default function Profile () {
    const currentUser=useAuth();
    const[photoURL,setPhotoURL]=useState('https://s2.glbimg.com/daMdYJhpxpr5-E78FMlS90olKYw=/0x0:1500x1000/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/m/d/anTjJ9RdAtAzpHlf6b0Q/filme-avatar-1.png');
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading]=useState(false);

function handleChange (e) {
if (e.target.files[0]) {
    setPhoto(e.target.files[0])
}
    }

function handleClick () {
upload(photo, currentUser, setLoading)
}
useEffect(()=>{
    if (currentUser?.photoURL){
    setPhotoURL(currentUser.photoURL)
    }
},[currentUser])
    
    return (
    
    <div className="fields">
<input type="file" onChange={handleChange}/>
<button disabled={loading || !photo} onClick={handleClick}>Upload</button>
<img src={photoURL} alt="avatar" className="avatar"/>
    </div>
)
}