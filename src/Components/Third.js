const Third = ({formData,setFormData}) => {
    return (  
    
    <div>
    <div>
            <input type="text" value={formData.phone} onChange={(event)=>setFormData({...formData, phone:event.target.value})}  placeholder="Phone No."/>
        </div>
        <div>
            <input type="email" value={formData.email} onChange={(event)=>setFormData({...formData, email:event.target.value})}  placeholder="Email id"/>
        </div>
    </div>);
}
 
export default Third;