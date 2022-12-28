import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex w-full justify-center gradient-bg-services items-center">
      <div className="flex mf:flex-row flex-col item-center justify-between md:p-20 py-20 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services To Continue <br /> To Improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex justify-start flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guranteed"
          subtitle="Security is guranted. We always maintain Privacy & Quality of Product"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best Exchange Rates"
          subtitle="Security is guranted. We always maintain Privacy & Quality of Product"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          subtitle="Security is guranted. We always maintain Privacy & Quality of Product"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
        />
      </div>
    </div>
  );
};

export default Services;
