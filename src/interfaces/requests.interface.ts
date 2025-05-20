interface IRequests {
  id: string;
  client: string;
  product: string;
  value: number;
  status: "Pendente" | "Processando" | "Finalizado";
  createdAt: Date;
}

export default IRequests;
