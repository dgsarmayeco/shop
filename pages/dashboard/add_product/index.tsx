import { useState } from "react";
import StepsComponent from "@/components/Steps";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import SuccessAlert from "@/components/SuccessAlert";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const [activeButton, setActiveButton] = useState("btn1");

  const nextStep = () => {
    setCurrent((prev) => Math.min(prev + 1, 3));
  };

  const lastStep = () => {
    setCurrent((prev) => Math.min(prev - 1, 3));
  };

  return (
    <section>
      {current === 3 ? "" : <StepsComponent current={current} />}

      {current == 0 ? (
        <StepOne
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          nextStep={nextStep}
          lastStep={lastStep}
        />
      ) : current == 1 ? (
        <StepTwo
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          nextStep={nextStep}
          lastStep={lastStep}
        />
      ) : current == 2 ? (
        <StepThree
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          nextStep={nextStep}
          lastStep={lastStep}
        />
      ) : current == 3 ? (
        <SuccessAlert />
      ) : (
        ""
      )}
    </section>
  );
};

export default Page;
