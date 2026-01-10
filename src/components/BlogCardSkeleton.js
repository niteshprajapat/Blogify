// export default async function BlogCardSkeleton() {
//     return (
//         <div className="
//       bg-gray-900/80 backdrop-blur-sm 
//       border border-gray-800/60 rounded-2xl 
//       overflow-hidden shadow-lg shadow-black/30
//       animate-pulse
//     ">
//             <div className="relative overflow-hidden aspect-[16/9] bg-gray-800/70" />
//             <div className="p-6 lg:p-7">
//                 <div className="inline-block px-3 py-1 mb-3 bg-gray-800/70 rounded-full h-5 w-20" />
//                 <div className="h-7 bg-gray-700 rounded w-5/6 mb-3" />
//                 <div className="space-y-2 mb-5">
//                     <div className="h-4 bg-gray-700 rounded w-full" />
//                     <div className="h-4 bg-gray-700 rounded w-full" />
//                     <div className="h-4 bg-gray-700 rounded w-3/4" />
//                 </div>
//                 <div className="flex justify-between">
//                     <div className="h-4 bg-gray-700 rounded w-24" />
//                     <div className="h-4 bg-gray-700 rounded w-16" />
//                 </div>
//             </div>
//         </div>
//     );
// }


export default function BlogCardSkeleton() {
    return (
        <div className="
      bg-gray-900/80 backdrop-blur-sm 
      border border-gray-800/60 rounded-2xl 
      overflow-hidden shadow-lg shadow-black/30
    ">
            <div className="aspect-[16/9] shimmer" />

            <div className="p-6 lg:p-7 space-y-4">
                <div className="h-5 w-20 rounded-full shimmer" />
                <div className="h-7 w-5/6 rounded shimmer" />

                <div className="space-y-2">
                    <div className="h-4 rounded shimmer" />
                    <div className="h-4 rounded shimmer" />
                    <div className="h-4 w-3/4 rounded shimmer" />
                </div>

                <div className="flex justify-between pt-2">
                    <div className="h-4 w-24 rounded shimmer" />
                    <div className="h-4 w-16 rounded shimmer" />
                </div>
            </div>
        </div>
    );
}
