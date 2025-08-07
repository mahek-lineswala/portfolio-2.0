function Contact() {
  return (
   <>
      <h1 className="text-gray-300 text-5xl mt-20 font-bold font-mono">Let's work together!</h1>
       <div className="flex gap-48 justify-center  ">
         <button className=" border-2 px-2 py-1 rounded-lg bg-[#c0faff] mt-8 hover:bg-[#171717] hover:text-white text-black">
          <a href="/icons/mahek_lineswala_resume" download="" className="text-center"> Download Resume</a>
          </button>
          <button className="border-2 px-2 py-1 rounded-lg bg-[#c0faff] mt-8 hover:bg-[#171717] mr-4 hover:text-white text-black">
            <a href="mailto:maheklineswala@gmail.com">Come Say hello!</a>
          </button>
       </div>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <a href="mailto:maheklineswala@gmail.com" className="border-b">maheklineswala@gmail.com</a>
   </>
  );
}

export default Contact;