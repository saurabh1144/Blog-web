const First = ({formData,setFormData}) => {
    return ( 
        <div className="form-container">
        <div>
            <input type="text" value={formData.firstname} onChange={(event)=>setFormData({...formData,firstname:event.target.value})} placeholder="First Name"/>
        </div>
        <div>
            <input type="text" value={formData.lastname} onChange={(event)=>setFormData({...formData,lastname:event.target.value})} placeholder="Last Name"/>
        </div>
         
        </div>
     );
}
 
export default First;
<div>
    
</div>