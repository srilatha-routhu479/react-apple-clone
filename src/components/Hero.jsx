export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
 
      <img
        src="./src/heroimg.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Message boxes container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">

       
        <div className="relative bg-blue-500 text-white text-lg md:text-2xl font-extrabold px-6 py-4 rounded-[25px] max-w-[60%] text-left leading-tight shadow-lg">
          Buy<br />
          Mac or iPad<br />
          for college.
          <div className="absolute bottom-0 right-3 w-4 h-4 bg-blue-500 rounded-full clip-tail"></div>
        </div>


        <div className="relative bg-blue-500 text-white text-base md:text-lg font-extrabold px-2 py-2 rounded-[25px] max-w-[60%] text-center shadow-lg">
          with education savings
          <div className="absolute bottom-0 right-3 w-3.5 h-3.5 bg-blue-500 rounded-full clip-tail"></div>
        </div>

        
        <div className="relative bg-blue-500 text-white text-lg md:text-2xl font-extrabold px-6 py-4 rounded-[25px] max-w-[60%] text-left leading-tight shadow-lg">
          Choose<br />
          AirPods or<br />
          an eligible<br />
          accessory
          <div className="absolute bottom-0 right-3 w-4 h-4 bg-blue-500 rounded-full clip-tail"></div>
        </div>

        {/* Shop Button */}
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-md hover:bg-blue-100 transition">
          Shop
        </button>
      </div>

    
      <style>
        {`
          .clip-tail {
            clip-path: polygon(0 0, 100% 100%, 100% 0);
            transform: translate(30%, 30%);
          }
        `}
      </style>
    </section>
  );
}
