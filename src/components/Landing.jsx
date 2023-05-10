export default function Landing() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 md:pr-10">
        <h1 className="text-6xl font-bold underline mb-4">
          Safer smart contracts
        </h1>
        <h2 className="text-gray-700 text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit,
          dolores magni qui perferendis ducimus nobis amet illum, tempore
          repellendus officia aliquid. Enim ullam, perspiciatis officiis modi ea
          illum hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iusto tenetur, perferendis, commodi accusantium sit rerum suscipit
          voluptates quasi expedita adipisci nulla hic sunt earum dolorum
          voluptatibus magnam! Quos, quam iste?
        </h2>
      </div>
      <div className="md:w-1/2">
        <img
          className="w-full"
          src="https://www.ultravity.co/images/google1-p-800.png"
          alt=""
        />
      </div>
    </div>
  );
}
