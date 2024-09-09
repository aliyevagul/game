const Hero = () => {
  return (
    <section className="text-center py-12 bg-black text-white">
      <span>Home</span>
      <span className="text-orange-300"> News </span>
      <h1 className="text-4xl font-bold">Lorem Ipsum is simply dummy text of the printing and.</h1>
      <p className="text-gray-200 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="mt-6">
        <input 
        
          type="text" 
          placeholder="Search" 
          className="p-2 bg-black text-white rounded-md w-1/2 max-w-md outline-none" 
        />
      </div>
    </section>
  );
};

export default Hero;
