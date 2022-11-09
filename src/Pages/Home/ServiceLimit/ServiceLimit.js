// import React, { useEffect, useState } from "react";
// import ServicesLimitCard from "./ServicesLimitCard";

// const ServiceLimit = () => {
//   const [services, setServices] = useState();
//   console.log(services);

//   useEffect(() => {
//     fetch("http://localhost:5000/services/limit")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error(err));
//   }, []);
//   return (
//     <div className="w-[90%] mx-auto">
//       <h1 className="text-5xl">Hello friends : {services}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {/* {services.map((service) => (
//           <ServicesLimitCard key={service._id} service={service} />
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default ServiceLimit;
