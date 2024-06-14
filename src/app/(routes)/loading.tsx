import { RingLoader } from "react-spinners";

const loading = () => {
    return ( 
      <section className=" w-full h-screen flex items-center justify-center">
      <RingLoader color="#36d7b7" size={90}/>
      </section>

     );
}
 
export default loading;