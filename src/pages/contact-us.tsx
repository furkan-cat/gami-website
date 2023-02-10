import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

interface IFormState {
  fullName: string;
  email: string;
  textArea: string;
}

export default function ContactUs() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormState>({
    fullName: "",
    email: "",
    textArea: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoader(true);

    // After submitting button with 2 second delay, stop spinner animation & clear form values & navigate the user to home page
    setTimeout(() => {
      setLoader(false);
      setFormValues({ fullName: "", email: "", textArea: "" });
      navigate("/", { state: "from-contact-us-tab" });
    }, 2000);
  };

  return (
    <div className="bg-gray-100 py-16 h-full px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="w-2/2 md:w-1/2 h-full">
          <div className="text-blue-gray-800 font-semibold sm:font-bold text-4xl leading-none">
            Lorem Ipsum Dolor Sit Amet
          </div>
          <div className="text-blue-gray-400 text-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.{" "}
          </div>
          <form
            onSubmit={handleSubmit}
            className="shadow-md bg-white rounded-lg rounded-lg md:[&>:not(:first-child)]:mt-4 mt-6 p-6 "
          >
            <input
              type="text"
              className="w-full bg-gray-100 p-4 rounded-md"
              placeholder="Full Name*"
              onChange={(e) =>
                setFormValues({ ...formValues, fullName: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full bg-gray-100 p-4 rounded-md"
              placeholder="E-Mail*"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <label className="inline-block text-blue-gray-800 font-medium leading-6 mt-4">
              Tell us more about your project*
            </label>
            <textarea
              cols={5}
              rows={5}
              onChange={(e) =>
                setFormValues({ ...formValues, textArea: e.target.value })
              }
              className="w-full bg-gray-100 text-blue-gray-800 font-medium text-sm p-2"
            ></textarea>
            <Button
              title="But GAMI"
              variant="primary"
              loading={loader}
              className="mt-4"
            />
          </form>
        </div>

        <div className="w-2/2 md:w-1/2 min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12042.644498252675!2d29.0356958!3d41.0107898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab804a186dc43%3A0x4aec921d757fd793!2zR0FNxLAgVEVLTk9MT0rEsA!5e0!3m2!1str!2str!4v1676021286805!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] md:h-full "
          ></iframe>
        </div>
      </div>
    </div>
  );
}
