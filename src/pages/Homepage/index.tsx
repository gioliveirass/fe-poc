import IRequests from "../../interfaces/requests.interface";
import RequestsTable from "../../components/RequestsTable";
import Button from "../../components/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ERouter } from "../../router";

const Homepage = () => {
  const navigate = useNavigate();

  const [requests, setRequests] = useState<IRequests[]>([
    {
      client: "Exemplo",
      createdAt: new Date(),
      id: "ijcniusdunci",
      product: "Exemplo",
      status: "Finalizado",
      value: 1000,
    },
  ]);

  const navigateTo = (route: ERouter): void => {
    navigate(route);
  };

  return (
    <div className="flex flex-col gap-8">
      <RequestsTable requests={requests} />
      <Button
        label="Cadastrar pedido"
        type="light"
        onClick={() => {
          navigateTo(ERouter.CREATE);
        }}
      />
    </div>
  );
};

export default Homepage;
