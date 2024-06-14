

export const api = {
    async getProducts (){
        const request = await fetch("/api/contracts",{
            method:"GET",
            cache:"no-cache"
          
         })
         const response = await request.json()
         return response
    },
    async getDocs(id:string){
     const request = await fetch(`/api/contracts/${id}`,{
        method:"GET",
        cache:"no-cache"
     })
     const response = await request.json()
     return response
    },
    async getCat(){
        const request  = await fetch("/api/categories", {
            method:"GET",
            cache:"no-cache"
        })
        const response = await request.json()
        return response
    },
    async getSearch(search:string){
        const request  = await fetch(`/api/search?search=${search}`, {
            method:"GET"
        })
         const response = await request.json()
         return response
    },
    async verifyUser(email:string){
        const request  = await fetch(`/api/recovery`, {
            method:"POST",
            body:JSON.stringify({email})
        })
        const response = await request.json()
        return response
    },
    async recoveryPass(tk:string,pass:string){
        const request  = await fetch(`/api/changePass`, {
            method:"POST",
            body:JSON.stringify({tk,pass})
        })
        const response = await request.json()
        return response
    }
    
    
    

}
