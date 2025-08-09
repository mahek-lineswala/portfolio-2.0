function Contact() {
  return (
   <>
      <h1 className="text-gray-300 text-5xl mt-12 font-bold font-mono text-center">Let's work together!</h1>
      <p className="text-gray-400 text-sm mt-2 text-center">I'm always open to new opportunities and exciting collaborations. Don't hesitate to reach out.</p>
       <img src="./images/kuru_mail.png" alt="" className="ml-48 mt-4 w-60 h-60" />
       <p className="text-white text-center"> email me at: <span className="text-[#c0faff] border-[#c0faff] border-b-2">maheklineswala@gmail.com</span></p>
       <p className="text-white text-center mt-2">Or</p>
       <div className="flex gap-48 justify-center  ">
          <button className="border-2 px-2 py-1 rounded-lg bg-[#c0faff] mt-2 hover:bg-[#171717] mr-4 hover:text-white text-black ml-4">
            <a href="mailto:maheklineswala@gmail.com"> Connect with me &gt;&lt; </a>
          </button>
       </div>
   </>
  );
}

export default Contact;