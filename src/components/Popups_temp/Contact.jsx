function Contact() {
  return (
   <>
      <div className="flex justify-center mx-36 my-8 w-fit">
            <form className="contact-form"  action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="af438c12-3d08-4ebf-962a-851a9009ac00" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
              <input type="hidden" name="from_name" value="My Website" />
              <div className="form-group-container">
                <div className="pb-4">
                  <label htmlFor="name" className="pr-4 text-lg">Your Name</label>
                  <input id="name" name="name" className="pl-4 py-1 rounded-md text-black" placeholder=" Your name" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="pr-5 text-lg">Your Email</label>
                  <input id="email" name="email" className="pl-4 py-1 rounded-md text-black" placeholder=" Your email" type="email" required />
                </div> <br />
                <div className="form-group">
                  <textarea className="pl-4 pr-36 pb-12 pt-2 rounded-md mt-4 text-black" id="message" name="message" placeholder=" Your message" required></textarea>
                </div>
              </div>
              <button className="flex justify-center border rounded-md p-2 mx-auto mt-8 hover:bg-[#2A9D8F] shadow-md" type="submit">Send Message</button>
            </form>
        </div>
   </>
  );
}

export default Contact;