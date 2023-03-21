import Image from 'next/image'

export default function Card({ title, image, description }) {
  return (
    <div className="bg-gray-200 shadow-2xl rounded-lg p-4 flex flex-col m-4">
      <div className="w-full h-full mb-4">
        <Image
          width={600}
          alt={title}
          height={600}
          // src='/01.jpg'
          src={image}
        />
      </div>
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
