import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { default as Loader } from "./Loader";
import FormInput from "./FormInput";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = ()=>{};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
            <br /> Across The World
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto World, buy ad sell crytocurrency on Krypto
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-sm-3 grid-cols-3 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Etherum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>BlockChain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color={`#FFFFF`} />
                </div>
                <BsInfoCircle fontSize={17} color={`#FFFFF`} />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  Component for the Eth Address needs to be created
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center  blue-glassmorphism ">
            <FormInput
              placeholder={`Address to`}
              name={`addressTo`}
              type={`text`}
              handleChange={() => {}}
            />
            <FormInput
              placeholder={`Amount ETH`}
              name={`amount`}
              type={`number`}
              handleChange={() => {}}
            />
            <FormInput
              placeholder={`Keyword (GIF)`}
              name={`keyword`}
              type={`text`}
              handleChange={() => {}}
            />
            <FormInput
              placeholder={`Enter Message`}
              name={`message`}
              type={`text`}
              handleChange={() => {}}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
            {false ? <Loader /> : <button type='button' onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2952e3]">Send Now</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
