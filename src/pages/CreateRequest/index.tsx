import Button from "../../components/Button";
import requestsApi from "../../services/requests/requests";
import IRequests from "../../interfaces/requests.interface";
import React, { useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { IRouter } from "../../router";

const CreateRequest = () => {
  const navigate = useNavigate();

  const [client, setClient] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [status, setStatus] = useState("Pendente");
  const [value, setValue] = useState<string>("");

  const navigateTo = (route: IRouter): void => {
    navigate(route);
  };

  const createRequest = async () => {
    const payload: IRequests = {
      client,
      product,
      status: status as "Pendente" | "Processando" | "Finalizado",
      value: parseInt(value),
      createdAt: new Date(),
      id: v4(),
    };

    const response = await requestsApi.create(payload);

    if (response !== "Error") {
      toast.success("Pedido cadastrado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigateTo(IRouter.HOMEPAGE);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        createRequest();
      }}
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cliente
        </label>
        <input
          onChange={(event) => {
            setClient(event.target.value);
          }}
          type="text"
          id="client"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Produto
        </label>
        <input
          onChange={(event) => {
            setProduct(event.target.value);
          }}
          type="text"
          id="product"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Status
        </label>
        <select
          required
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          id="status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="Pendente">
            Pendente
          </option>
          <option value="Processando">Processando</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Valor
        </label>
        <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="number"
          id="value"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-center gap-4">
        <Button
          label="Voltar"
          styleType="dark"
          onClick={() => {
            navigateTo(IRouter.HOMEPAGE);
          }}
        />
        <Button label="Cadastrar" styleType="default" type="submit" />
      </div>
    </form>
  );
};

export default CreateRequest;
