const Second = ({formData,setFormData}) => {
    return ( <div>
        <div>
            <input type="text" value={formData.address} onChange={(event)=>setFormData({...formData, address:event.target.value})}  placeholder="Address"/>
        </div>
        <div>
            <input type="text" value={formData.city} onChange={(event)=>setFormData({...formData, city:event.target.value})}  placeholder="City"/>
        </div>
        <div>
            <input type="text" value={formData.state} onChange={(event)=>setFormData({...formData, state:event.target.value})} placeholder="State"/>
        </div>
    </div> );
}
 
export default Second;
