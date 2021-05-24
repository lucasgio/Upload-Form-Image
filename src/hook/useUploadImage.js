

export const useUploadImage = async (file) => {
    
   const cloudUrl = 'https://api.cloudinary.com/v1_1/dr9shic8v/upload';
   

   const formData = new FormData();
   formData.append('upload_preset','react_test');
   formData.append('file',file);
   
   try {
       
    const resp = await fetch( cloudUrl, {
        method:'POST',
        body:formData,
    });

    if(resp.ok){
        
        const cloudResp = await resp.json(); 
        return cloudResp;
    }else{
        throw await resp.json();
    }

   } catch (err) {
       throw err;
   }







 

}
