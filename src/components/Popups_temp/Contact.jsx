function Contact() {
  return (
   <>
      <h1 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-12 font-bold font-mono text-center">Let's work together!</h1>
      <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center px-2">I'm always open to new opportunities and exciting collaborations. Don't hesitate to reach out.</p>
       <div className="flex justify-center mt-4">
         <img src="./images/kuru_mail.png" alt="" className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60" />
       </div>
       <p className="text-white text-center text-sm sm:text-base mt-4"> email me at: <span className="text-[#c0faff] border-[#c0faff] border-b-2">maheklineswala@gmail.com</span></p>
       <p className="text-white text-center mt-2">Or</p>
       <div className="flex justify-center">
          <button className="border-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-[#c0faff] mt-2 hover:bg-[#171717] hover:text-white text-black transition-colors">
            <a href="mailto:maheklineswala@gmail.com"> Connect with me &gt;&lt; </a>
          </button>
       </div>
   </>
  );
}

export default Contact;