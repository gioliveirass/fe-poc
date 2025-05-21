import IRequests from "../../interfaces/requests.interface";
import RequestsTable from "../../components/RequestsTable";
import Button from "../../components/Button";
import React, { useState } from "react";

const Homepage = () => {
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

  return (
    <div className="flex flex-col gap-8">
      <RequestsTable requests={requests} />
      <Button label="Cadastrar pedido" type="light" />
    </div>
  );
};

export default Homepage;
