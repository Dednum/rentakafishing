import Image from "next/image";


const galleryTop = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
];


const galleryBottom = [
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
];


function GalleryRow({images, direction}){

  return (

    <div
      className="
        flex
        overflow-hidden
      "
    >

      <div
        className={`
          flex
          gap-6
          w-max
          ${
            direction === "right"
            ? "animate-scroll-right"
            : "animate-scroll-left"
          }
        `}
      >

        {[...images,...images,...images].map((img,index)=>(

          <div
            key={index}
            className="
              relative
              w-[280px]
              h-[200px]
              rounded-3xl
              overflow-hidden
              shrink-0
            "
          >

            <Image
              src={img}
              alt="Rentaka Experience"
              fill
              className="
                object-cover
                hover:scale-110
                transition
                duration-500
              "
            />

          </div>

        ))}


      </div>


    </div>

  )
}



export default function GallerySection(){


return (

<section className="bg-black py-20 overflow-hidden">


<div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-14">

<h2 className="
text-4xl
font-bold
text-White
">
Experience With Rentaka
</h2>


<p className="
text-gray-500
mt-4
">
Explore our journey, adventures and moments shared with our community.
</p>

</div>




{/* Gallery */}

<div className="space-y-8">


{/* top move right */}

<div className="overflow-hidden">

<GalleryRow 
images={galleryTop}
direction="right"
/>

</div>



{/* bottom move left */}

<div className="overflow-hidden">

<GalleryRow 
images={galleryBottom}
direction="left"
/>

</div>



</div>


</div>


</section>

)

}