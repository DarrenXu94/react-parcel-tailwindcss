import * as React from "react";
export interface AppProps {}

export default function App({}: AppProps) {
  return (
    <div className="container mx-auto">
      <a
        href=""
        className="bg-white text-blue-600 text-sm font-semibold rounded-md px-3 py-2 shadow mt-2 sm:mt-0"
      >
        Button
      </a>
    </div>
  );
}
