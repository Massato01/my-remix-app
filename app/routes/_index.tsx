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

import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-400 to-purple-500">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage alt="Nina" src="/nina.png" />
            <AvatarFallback>Nina</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl font-bold text-white">Nina</h3>
          <p className="text-lg text-gray-200">The Jokester</p>
        </div>
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage alt="Mini" src="/mini.png" />
            <AvatarFallback>Mini</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl font-bold text-white">Mini</h3>
          <p className="text-lg text-gray-200">The Prankster</p>
        </div>
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage alt="Nik" src="/nik.png" />
            <AvatarFallback>Nik</AvatarFallback>
          </Avatar>
          <h3 className="text-2xl font-bold text-white">Nik</h3>
          <p className="text-lg text-gray-200">The Trickster</p>
        </div>
      </div>
      <div className="mt-8">
        <Button
          className="text-gray-300 hover:bg-white hover:text-purple-500"
          variant="outline"
        >
          ALL THREE ARE CRAZY
        </Button>
      </div>
    </div>
  );
}
