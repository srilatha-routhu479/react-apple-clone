import heroImage from '../heroimg.jpg'; // ✅ correct path

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
        {/* Your message boxes and buttons */}
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
