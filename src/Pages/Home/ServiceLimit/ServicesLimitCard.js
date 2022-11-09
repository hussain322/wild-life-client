// import React from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import { Link } from "react-router-dom";

// const ServicesLimitCard = ({ service }) => {
//   const { img, description, price, title, _id } = service;
//   return (
//     <div className="card card-compact w-full bg-base-100 shadow-xl">
//       <figure>
//         <PhotoProvider>
//           <PhotoView src={img}>
//             <img
//               src={img}
//               alt="Shoes"
//               style={{ objectFit: "cover" }}
//               className="w-full"
//             />
//           </PhotoView>
//         </PhotoProvider>
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p>{description.slice(0, 100)}...</p>
//         <p className="text-xl font-semibold">Price: ${price}</p>
//         <div className="card-actions justify-end">
//           <Link to={`/serviceDetails/${_id}`}>
//             <button className="bg-green-600 py-3 px-6 rounded-lg font-semibold text-lg text-white hover:bg-green-800 duration-[.3s]">
//               See Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesLimitCard;
