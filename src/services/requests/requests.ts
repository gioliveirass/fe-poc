import axiosInstance from "../../api/api";
import IRequests from "../../interfaces/requests.interface";

export enum RequestsEndpoints {
  LIST = "/Orders",
  CREATE = "/Orders",
}

class Requests {
  async list() {
    try {
      const response = await axiosInstance.get<IRequests[]>(
        RequestsEndpoints.LIST
      );

      return response.data;
    } catch (error) {
      console.log("Erro ao listar pedidos", error);
      return [];
    }
  }

  async create(payload: IRequests) {
    try {
      const response = await axiosInstance.post(
        RequestsEndpoints.CREATE,
        payload
      );

      return response;
    } catch (error) {
      console.log("Erro ao listar pedidos", error);
      return "Error";
    }
  }
}

export default new Requests();
