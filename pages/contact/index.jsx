import ActionButton from "@/components/actionButton";
import TextInput from "@/components/textInput";
import Title from "@/components/title";
import { useRef, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const title = ["C", "o", "n", "t", "a", "c", "t", "", "m", "e"];

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => emailjs.init("HJ85cogQXkfh3spHJ"), []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      emailjs
        .sendForm("service_jzjpjsh", "template_b1y0zuu", form.current)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully", { theme: "colored" });
          setValue({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        });
    } catch (error) {
      toast.error("Error sending message");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>JTK | Conctact</title>
      </Head>
      <section className="section__padding bg-primary-bg min-h-screen relative">
        <div className="fake-big">Contact</div>
        <div className="flex flex-col">
          <div className="py-[100px] w-full max-w-[600px]">
            <Title title={title} />
            <Fade delay={500} bottom>
              <p className="">
                If you have any job offer for me, you could use the form below
                to reach out to me.
              </p>
            </Fade>
            <form ref={form} onSubmit={handleSubmit} className="mt-10">
              <Fade bottom delay={1000}>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <TextInput
                    value={value.name}
                    name="name"
                    type="text"
                    handleChange={handleChange}
                    placeholder="Name"
                  />
                  <TextInput
                    value={value.email}
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </Fade>
              <Fade bottom delay={1500}>
                <TextInput
                  value={value.subject}
                  name="subject"
                  type="text"
                  handleChange={handleChange}
                  placeholder="Subject"
                />
                <textarea
                  required
                  autoComplete="false"
                  value={value.message}
                  name="message"
                  type="text"
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-[25vh] outline-none border-none shadow-[0_0_0px_1000px_#2b2b2b_inset] bg-[#2b2b2b] py-2.5 px-5 text-[0.975rem] text-[#8d8d8d]"
                />
                <div className="mt-5">
                  <ActionButton text="Submit" loading={isLoading} />
                </div>
              </Fade>
            </form>
          </div>
          <div className="w-[50%] hidden md:block"></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
