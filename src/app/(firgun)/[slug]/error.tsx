/* eslint-disable n/handle-callback-err */
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full min-h-[calc(100vh-15rem)] flex flex-col items-center">
      <div className="w-[50vw] max-lg:w-full bg-white rounded-xl p-16 max-lg:p-5 flex flex-col items-center justify-center mt-20">
        <h2 className="text-2xl text-red-600 font-semibold mb-4">
          Houve um erro ao carregar os dados
        </h2>
        <button
          onClick={() => reset()}
          className="min-w-48 h-12 mt-5 px-5 rounded-md bg-secondary text-white text-base font-bold
                  flex items-center justify-center transition-all duration-500 hover:bg-primary"
        >
          <span>Tente novamente</span>
        </button>
      </div>
    </div>
  );
}
