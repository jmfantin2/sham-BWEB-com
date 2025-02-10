//https://codepen.io/z-/pen/JXVpgp
//<h1 style={{color: "red"}}>Hello Style!</h1>
import { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

type RingLoaderProps = {
  mode: 'fullpage' | 'basic';
};

export function RingLoader({ mode }: RingLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1633); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []); //todo: loading context instead of useState() so i can hide anything that might go overflow-y while RingLoader is there x_x (TransactionSimulation)

  switch (mode) {
    case 'fullpage':
      return (
        loading && (
          <>
            <div className="rounded-2xl absolute flex justify-center items-center bg-[#e8e8e8] dark:bg-IRON h-full w-full z-30">
              <ImSpinner9
                className="fixed text-[#f43257] animate-spin z-10"
                size={100}
              />
              <img
                className="fixed w-[80px] inset-0 m-auto select-none rounded-full pointer-events-none z-0"
                src="/images/loader_sham.jpg"
                alt="loading"
              />
            </div>
          </>
        )
      );
    case 'basic':
    default:
      return (
        <div className="relative flex justify-center items-center z-50">
          <ImSpinner9 className="text-AMG_GOLD animate-spin z-0" size={96} />
          <img
            className="fixed w-[96px] inset-0 m-auto select-none rounded-full pointer-events-none z-10"
            src="/images/loader_sham.jpg"
            alt="loading"
          />
        </div>
      );
  }
}
