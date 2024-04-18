// import type { MetaFunction } from "@remix-run/cloudflare";
// import { Input } from "~/components/ui/input";
// import { Button } from "~/components/ui/button";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "Workshop" },
//     {
//       name: "description",
//       content: "Workshop de Remix com Cloudflare!",
//     },
//   ];
// };

// export default function Index() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-blue-500 bg-violet-300">
//         SONO CHI NO SADAME
//       </h1>
//       <h1 className="text-3xl font-bold text-white bg-violet-900">
//         JOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOJO
//       </h1>

//       <div>
//         <Button variant={"default"}>Button</Button>
//       </div>
//     </div>
//   );
// }

// // import type { MetaFunction } from "@remix-run/cloudflare";

// // export const meta: MetaFunction = () => {
// //   return [
// //     { title: "Workshop" },
// //     {
// //       name: "description",
// //       content: "Workshop de Remix com Cloudflare!",
// //     },
// //   ];
// // };

// // export default function Index() {
// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold text-blue-500">
// //         Bem-vindo ao Workshop!
// //       </h1>
// //     </div>
// //   );
// // }

import { Link } from "@remix-run/react";
export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#FF6B6B] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MountainIcon className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Acme Inc</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Link className="text-white hover:underline" to="#">
            Dashboard
          </Link>
          <Link className="text-white hover:underline" to="#">
            Customers
          </Link>
          <Link className="text-white hover:underline" to="#">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-[#F5F5F5] py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#FFF3B0] rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-[#FF6B6B] rounded-full p-2">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#333] font-['Pacifico']">
            Nina
          </h3>
        </div>
        <div className="bg-[#B5EAEA] rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-[#9B59B6] rounded-full p-2">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#333] font-['Pacifico']">
            Mini
          </h3>
        </div>
        <div className="bg-[#FFCDD2] rounded-lg p-4 flex items-center space-x-4">
          <div className="bg-[#E91E63] rounded-full p-2">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#333] font-['Pacifico']">
            Nik
          </h3>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
