import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
      const [services,setServices]=useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=>setServices(data))
      },[])
      console.log(services);

      return (
            <div className="my-4">
                  <div className="text-center space-y-3">
                        <h2 className="text-3xl text-bold text-orange-800">Services</h2>
                        <h2 className="text-5xl text-bolder">Our Service Area</h2>
                        <h2>the majority have suffered alteration in some form,  by injected humour, or randomised words <br /> which don0t look even slightly believable. </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                        {
                              services.map(service=>
                              <ServiceCard
                              key={service._id}
                              service={service}
                              >

                              </ServiceCard>)
                        }
                  </div>

            </div>
      );
};

export default Services;