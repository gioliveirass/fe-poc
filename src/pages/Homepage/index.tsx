import IRequests from "../../interfaces/requests.interface";
import RequestsTable from "../../components/RequestsTable";
import requestsApi from "../../services/requests/requests";
import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IRouter } from "../../router";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateTo = (route: IRouter): void => {
    navigate(route);
  };

  const [requests, setRequests] = useState<IRequests[]>([]);

  useEffect(() => {
    listRequests();
  }, []);

  const listRequests = async () => {
    const list = await requestsApi.list();
    setRequests(list);
  };

  return (
    <div className="flex flex-col gap-8">
      <RequestsTable requests={requests} />
      <Button
        label="Cadastrar pedido"
        styleType="light"
        onClick={() => {
          navigateTo(IRouter.CREATE);
        }}
      />
    </div>
  );
};

export default Homepage;
