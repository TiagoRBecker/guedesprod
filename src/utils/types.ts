export type contactType = {
    name: string
    email: string
    phone: string
    message: string
  }

export type Checkout ={
  name: string;
  email: string;
  phone: string;
  city: string;
  doc:string
  
}

export type Categories = {
   id?:number
   name:string,
   slug:string,
   img:string
}
export type Product = {
  id:number 
  title :string,     
  slug:string
  img:string      
  price:number  
  thumb?:string 
  Categories?:{
    name:string
  }   
}
export type Login ={
   email:string,
   password:string
}
export type Create = {
  name:string,
  email:string,
  password:string,
  confirm:string,
  docs:string,
  profession:string
}
export type Links ={
  name:string,
  path:string,
  icon:string
}