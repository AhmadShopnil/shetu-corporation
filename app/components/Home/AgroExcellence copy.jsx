// "use client";

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// import mainImg from "@/assets/blog-4.jpg";
// import card1 from "@/assets/blog-4.jpg";
// import card2 from "@/assets/blog-4.jpg";
// import card3 from "@/assets/blog-4.jpg";
// import card4 from "@/assets/blog-4.jpg";

// export default function AgroExcellence() {
//   return (
//     <section className="bg-[#f5f5f3] py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Grid Layout */}
//         <div className="grid lg:grid-cols-2 gap-14 items-start">

//           {/* LEFT IMAGE */}
//           <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
//             <Image
//               src={mainImg}
//               alt="farmer"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div>

//             {/* Top Tag */}
//             <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
//               <span className="text-green-600 text-lg">🌱</span>
//               <p className="font-medium">Agro Excellence</p>
//             </div>

//             {/* Heading */}
//             <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-10">
//               Building a Greener Farming
//             </h2>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-10 mb-10">

//               <div>
//                 <div className="text-3xl mb-3 text-[#8b8b5c]">🍃</div>
//                 <h4 className="text-xl font-semibold text-gray-900 mb-2">
//                   80% Pure Growth
//                 </h4>
//                 <p className="text-sm text-gray-500">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>

//               <div>
//                 <div className="text-3xl mb-3 text-[#8b8b5c]">🌿</div>
//                 <h4 className="text-xl font-semibold text-gray-900 mb-2">
//                   95% Organic Roots
//                 </h4>
//                 <p className="text-sm text-gray-500">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>

//             </div>

//             {/* Cards Row */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//               {[
//                 { img: card1, title: "Technology Farms" },
//                 { img: card2, title: "Organic Farm Solutions" },
//                 { img: card3, title: "The Eco-Friendly Farming" },
//                 { img: card4, title: "Organic Supply" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition"
//                 >
//                   <div className="relative w-full h-[110px] rounded-xl overflow-hidden mb-4">
//                     <Image
//                       src={item.img}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <h4 className="font-semibold text-gray-900 text-sm leading-snug mb-3">
//                     {item.title}
//                   </h4>

//                   <button className="text-green-600 text-sm flex items-center gap-1 font-medium">
//                     Read More <ArrowRight size={14} />
//                   </button>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }