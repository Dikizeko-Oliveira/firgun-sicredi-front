"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User, LogOut, File, Users2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false);

    const handleNavigate = (route: string) => {
        setShowProfile(!showProfile);
        router.push(route);
    };

    return (
        <div className="flex items-center justify-between border-b py-5">
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-zinc-800"
                >
                    logo
                </Link>
            </div>

            {/* <div className="flex items-center gap-4 relative">
        <button
          className="items-center gap-2 flex hover:underline"
          onClick={() => setShowProfile(!showProfile)}
        >
          <Image
            src="https://github.com/Dikizeko-Oliveira.png"
            className="h-10 w-10 rounded-full"
            width={44}
            height={44}
            alt=""
          />
        </button>

        {showProfile && (
          <div className="bg-zinc-100 rounded-lg w-80 absolute top-14 right-0 shadow-2xl transition-all">
            <div className="flex items-center justify-between w-full p-4 gap-4 border-b-2">
              <Image
                src="https://github.com/Dikizeko-Oliveira.png"
                className="h-12 w-12 rounded-full"
                width={50}
                height={50}
                alt=""
              />

              <div className="flex flex-col w-full">
                <h3 className="text-base font-bold text-slate-600">
                  John Doe James
                </h3>
                <span className="text-xs text-slate-500">Admin</span>
              </div>
            </div>

            <ul className="flex flex-col">
              <li className="hover:bg-slate-200 rounded-sm py-2 px-4 cursor-pointer transition-all">
                <button
                  onClick={() => handleNavigate("/profile")}
                  className="w-full h-full flex items-center gap-1"
                >
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">
                    Dados de usuário - perfil
                  </span>
                </button>
              </li>
              <li className="hover:bg-slate-200 rounded-sm py-2 px-4 cursor-pointer transition-all">
                <button
                  onClick={() => handleNavigate("/users")}
                  className="w-full h-full flex items-center gap-1"
                >
                  <Users2 className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">
                    Gerenciar usuários
                  </span>
                </button>
              </li>
              <li className="hover:bg-slate-200 rounded-sm py-2 px-4 cursor-pointer transition-all">
                <button
                  onClick={() => setShowProfile(false)}
                  className="w-full h-full flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">Sair</span>
                </button>
              </li>
            </ul>

            <div className="flex items-center justify-end w-full h-12 border-t px-4">
              <button className="flex items-center gap-1 text-slate-900 hover:underline hover:text-orange-400 transition-all">
                <File className="h-3 w-3" />
                <span className="text-xs font-medium">
                  Subir novo arquivo base
                </span>
              </button>
            </div>
          </div>
        )}
      </div> */}
        </div>
    );
}
