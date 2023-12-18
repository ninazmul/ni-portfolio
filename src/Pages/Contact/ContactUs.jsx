import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const form = useRef();

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_r949igq",
      "template_uzee5it",
      form.current, // Pass the HTML form element using ref
      "zI5ie0ibLaamw9QaF"
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Email sent successfully!",
          text: "Your message has been sent.",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
};

    
  return (
    <div>
      <div className="" id="email">
        <div className="min-h-screen" data-aos="fade-up">
          <div>
            <div className="py-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase">
                Contact me via <span className="text-fuchsia-500">E-mail</span>
              </h1>
            </div>
            <div className="hero ">
              <div className="card lg:w-1/2 md:w-2/3 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
                <p className="text-fuchsia-500 text-center">
                  nazmulsaw@gmail.com
                </p>
                <form className="card-body" ref={form} onSubmit={sendEmail}>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="user_name"
                      className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Your Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="user_email"
                      className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Your Message</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Write your message..."
                      name="message"
                      className="input input-bordered glass border-fuchsia-800 border-2 input_glow pt-6 pb-20"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
