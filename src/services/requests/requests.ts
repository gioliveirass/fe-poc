import axiosInstance from "../../api/api";
import IRequests from "../../interfaces/requests.interface";

export enum RequestsEndpoints {
  LIST = "/Orders",
}

class Requests {
  async list() {
    const response = await axiosInstance.get<IRequests[]>(
      RequestsEndpoints.LIST
    );

    return response.data;
  }
}

export default new Requests();
