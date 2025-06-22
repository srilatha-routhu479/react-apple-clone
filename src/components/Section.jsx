export default function Section({ title, subtitle, image, dark, className }) {
  // Reusable Button component inside this file
  const Button = ({ children, variant = "primary", href = "#" }) => {
    const baseStyles =
      "px-6 py-3 rounded-full font-semibold text-lg transition duration-300";

    const variants = {
      primary: "bg-blue-700 text-white hover:bg-blue-800",
      secondary: "bg-gray-300 text-black hover:bg-gray-400",
      dark: "bg-gray-700 text-white hover:bg-gray-800",
    };

    const classes = `${baseStyles} ${variants[variant] || variants.primary}`;
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  };

  return (
    <section className={`relative w-full h-[80vh] mb-4 ${className}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 ${
          dark ? "bg-black bg-opacity-60" : "bg-white bg-opacity-40"
        }`}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-bold ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-xl md:text-2xl font-semibold ${
            dark ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {subtitle}
        </p>
        <div className="mt-6 flex gap-6">
          <Button variant={dark ? "primary" : "primary"}>Learn more</Button>
          <Button variant={dark ? "dark" : "secondary"}>Buy</Button>
        </div>
      </div>
    </section>
  );
}
