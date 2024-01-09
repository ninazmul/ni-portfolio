import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

export const ContactUs = () => {
  const form = useRef();
  const { user } = useAuth();

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_r949igq",
      "template_uzee5it",
      form.current,
      "zI5ie0ibLaamw9QaF"
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Email sent successfully!",
          text: "Your message has been sent to N.I..",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
};

    
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="py-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase">
          Contact me via <span className="text-fuchsia-500">E-mail</span>
        </h1>
      </div>
      <div className="">
        <div className="shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white rounded-xl md:w-[700px]">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user.displayName}
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
                defaultValue={user.email}
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
  );
};

export default ContactUs;