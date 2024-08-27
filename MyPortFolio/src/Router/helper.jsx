import axios from "axios";



export async function ProjectLoader(){
    
    const response = await axios.get('src/data/Projects.json')
    if(response.status == 200){
        return response.data
    }
    else{
        alert("Error fetching projects")
    }
        
}
export async function CertLoader(){
    
    const response = await axios.get('src/data/Cerifications.json')
    if(response.status == 200){
        return response.data
    }
    else{
        alert("Error fetching certifications")
    }
        
}
