import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <div>
        <h2 className="text-4xl font-bold leading-[68px] font-palanquin lg:max-w-md">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h2>
      </div>
      <div className="lg:max-w-[44%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border rounded-full">
        <input
          type="text"
          // py-4 px-6 border border-slate-gray
          className="input"
          placeholder="subcribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Sign Up"
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
