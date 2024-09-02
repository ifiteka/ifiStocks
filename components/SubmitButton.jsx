import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending}
      type="submit"
      className="px-4 py-3 border border-neutral-400 rounded-lg"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
