import IRequests from "../../interfaces/requests.interface";
import React, { useState } from "react";
import RequestsTable from "../../components/RequestsTable";

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

  return <RequestsTable requests={requests} />;
};

export default Homepage;
