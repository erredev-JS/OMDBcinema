export const Loader = () => {
  return (
    // Aqui va animation bounce
    <div className="w-15 h-15  animate-bounce m-auto flex  duration-infinite mt-[20vh]">
        {/* Aqui va animation flip */}
        <div className=" w-10 h-10 m-auto  animate-spin duration-infinite  relative rounded-3xl overflow-hidden">
            <div className="bg-white w-2/3 rounded-full h-2 absolute top-0">

            </div>
            <div className="bg-white w-2/3 rounded-full h-2 absolute bottom-0">

            </div>
            <div className="bg-white w-2 rounded-full h-2/3 absolute right-0">

            </div>
            <div className="bg-white w-2 rounded-full  h-1/3 absolute top-1/2 translate-y-[-50%]">

            </div>
          
        </div>
    </div>
  );
};