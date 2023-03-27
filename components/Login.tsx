import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="h-screen items-center justify-center bg-gray-200/50">
      <div className="flex h-screen flex-col items-center justify-center bg-gray-200/50">
        <div className="max-w-[420px] rounded-xl border-2 border-gray-200 bg-white p-7">
          <h1 className="mb-2 text-3xl font-semibold">Log In</h1>
          <p className="text-sm">
            By continuing, you agree are setting up a Reddit account and agree
            to our{" "}
            <span className="cursor-pointer text-blue-500 hover:underline">
              User Agreement
            </span>{" "}
            and{" "}
            <span className="cursor-pointer text-blue-500 hover:underline">
              Privacy Policy
            </span>
            .
          </p>
          <button
            onClick={() => signIn("reddit")}
            className="my-5 flex w-full transform items-center justify-center space-x-2 rounded-full border-2 border-orange-500 px-3 py-2 transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            <div className="relative h-8 w-8 flex-shrink-0">
              <Image
                src="https://links.papareact.com/23l"
                className="object-contain"
                fill
                alt="Reddit Login"
              />
            </div>

            <h3 className="text-sm font-semibold">Sign In with Reddit</h3>
          </button>
          <button
            onClick={() => signIn("google")}
            className="my-5 flex w-full transform items-center justify-center space-x-2 rounded-full border-2 border-blue-500 px-3 py-2 transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            <div className="relative h-8 w-8 flex-shrink-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/google.png?alt=media&token=303faf61-4ec0-44a5-9ac2-a4d368a0f749"
                className="object-contain"
                fill
                alt="Google Login"
              />
            </div>

            <h3 className="text-sm font-semibold">Sign In with Google</h3>
          </button>
          <button
            onClick={() => signIn("github")}
            className="my-5 flex w-full transform items-center justify-center space-x-2 rounded-full border-2 border-[#0D1117] px-3 py-2 transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            <div className="relative h-8 w-8 flex-shrink-0">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/github.png?alt=media&token=1d605f7f-3e0b-41be-a08c-d557ef79ab70"
                className="object-contain"
                fill
                alt="Github Login"
              />
            </div>

            <h3 className="text-sm font-semibold">Sign In with Github</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
