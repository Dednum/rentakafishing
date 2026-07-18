import Image from "next/image";


const experts = [
  {
    name: "Mohd Fazrul Azuan",
    role: "Freshwater Specialist",
    image: "/experts/1.jpeg",
    description:
      "Specialized in freshwater fishing and helping anglers choose the right equipment."
  },
  {
    name: "Firdaus Firdaus",
    role: "Casting Expert",
    image: "/experts/2.jpeg",
    description:
      "Experienced angler with deep knowledge in casting techniques and fishing gear."
  },
  {
    name: "Khairul Firdaus",
    role: "Lure Fishing Expert",
    image: "/experts/dummy3.png",
    description:
      "Passionate about lure fishing and sharing practical fishing experiences."
  },
];


export default function FishingExpert(){

return (

<section className="bg-white py-20">


<div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-14">


<h2
className="
text-4xl
md:text-5xl
font-bold
text-black
"
>
Expert Rentaka Specialist
</h2>


<p
className="
mt-4
text-gray-500
max-w-2xl
mx-auto
"
>
Meet our experienced team who share
knowledge, passion and expertise to help
you enjoy fishing hunter.
</p>


</div>




{/* Cards */}

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{
experts.map((expert,index)=>(


<div
key={index}
className="
group
relative
overflow-hidden
rounded-3xl
h-[430px]
shadow-lg
cursor-pointer
"
>


{/* Image */}

<Image

src={expert.image}
alt={expert.name}
fill

className="
object-cover
group-hover:scale-110
transition
duration-700
"

/>



{/* Dark overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-black/20
to-transparent
"
/>



{/* Content */}

<div
className="
absolute
bottom-0
p-7
text-white
"
>


{/* Badge */}

<span
className="
inline-block
bg-[#0A483D]
px-4
py-1
rounded-full
text-sm
mb-4
"
>
{expert.role}
</span>



<h3
className="
text-2xl
font-bold
"
>
{expert.name}
</h3>



<p
className="
mt-3
text-sm
text-gray-200
leading-relaxed
opacity-0
group-hover:opacity-100
transition
duration-500
"
>
{expert.description}
</p>


</div>


</div>


))

}


</div>


</div>


</section>

)

}