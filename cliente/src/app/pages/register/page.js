"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const { push, refresh } = useRouter();

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
        if (user.password !== user.confirmpass) {
            toast.error("As senhas não coincidem!");
            return;
        } else {
            toast.success("Cadastro efetuado!");
            setTimeout(() => {
                push("/pages/dashboard");
              }, 1500);
        }
    } catch {
      toast.error("Error!");
      refresh();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 mb-16">
      <form
        onSubmit={RegisterUser}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 text-gray-800"
      >
        <div className="mb-4">
          <label className="block text-md font-semibold mb-2" htmlFor="email">
            Nome Completo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            type="text"
            placeholder="Nome Completo"
            onChange={(e) => {
              setUser({ ...user, nome: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-semibold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-semibold mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-md font-semibold mb-2"
            htmlFor="password"
          >
            Confirmar Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmpassword"
            type="password"
            placeholder="Confirmar Senha"
            onChange={(e) => {
              setUser({ ...user, confirmpass: e.target.value });
            }}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-custom-yellow hover:bg-custom-yellow-hover text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}