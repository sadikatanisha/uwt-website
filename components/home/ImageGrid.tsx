import React from "react";

type ImageCardProps = {
  imageUrl: string;
  title: string;
  highlight?: string;
};

const imageData: ImageCardProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Help Turkey and Syria",
    highlight: "Earthquake Relief Fund",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Health sector in",
    highlight: "Nigeria",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Flood in",
    highlight: "Manipur",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Education in",
    highlight: "Iraq",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Help Poor children from",
    highlight: "Cancer to access treatment",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Child Labour in",
    highlight: "Wold",
  },
];

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  highlight,
}) => (
  <div className="relative rounded-xl overflow-hidden shadow-md group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-60 object-cover grayscale group-hover:grayscale-0 transition duration-300"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <p className="text-md">
        {title}{" "}
        <span className="text-[#BC4749] font-semibold">{highlight}</span>
      </p>
    </div>
  </div>
);

const ImageGrid: React.FC = () => {
  return (
    <section className="p-6 md:p-12">
      <h2 className="text-2xl font-bold mb-6">Fundraisers In Extreme Need</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {imageData.map((data, idx) => (
          <ImageCard key={idx} {...data} />
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
