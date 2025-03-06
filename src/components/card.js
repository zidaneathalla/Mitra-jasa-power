import Image from 'next/image';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image src={imageUrl} alt={title} width={400} height={300} className="w-full h-64 object-cover" />
      <div className="p-4 bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full">
        <p className="text-white font-semibold italic">{title}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;