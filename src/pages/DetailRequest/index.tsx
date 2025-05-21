import Button from "../../components/Button";
import requestsApi from "../../services/requests/requests";
import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IRouter } from "../../router";
import { toast } from "react-toastify";

const DetailRequest = () => {
  const navigate = useNavigate();
  const { requestId } = useParams();

  const [client, setClient] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [status, setStatus] = useState("Pendente");
  const [value, setValue] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");

  const navigateTo = (route: IRouter): void => {
    navigate(route);
  };

  useEffect(() => {
    if (requestId) searchRequest(requestId);
  }, [requestId]);

  const searchRequest = async (id: string) => {
    const foundedRequest = await requestsApi.searchById(id);

    if (!foundedRequest) {
      toast.error("Não foi possível encontrar o pedido!");
      return;
    }

    setClient(foundedRequest.client);
    setProduct(foundedRequest.product);
    setStatus(foundedRequest.status);
    setValue(`${foundedRequest.value}`);

    const formattedCreatedAt = new Date(
      foundedRequest.createdAt
    ).toLocaleDateString();

    setCreatedAt(formattedCreatedAt);
  };

  return (
    <form className="max-w-sm mx-auto flex flex-col gap-5">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Cliente
        </label>
        <input
          value={client}
          type="text"
          id="client"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Produto
        </label>
        <input
          value={product}
          type="text"
          id="product"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Status
        </label>
        <input
          value={status}
          type="text"
          id="status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Valor
        </label>
        <input
          value={value}
          type="number"
          id="value"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Data de Criação
        </label>
        <input
          value={createdAt}
          type="string"
          id="value"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        />
      </div>

      <div className="flex justify-center gap-4">
        <Button
          label="Voltar"
          styleType="default"
          onClick={() => {
            navigateTo(IRouter.HOMEPAGE);
          }}
        />
      </div>
    </form>
  );
};

export default DetailRequest;
