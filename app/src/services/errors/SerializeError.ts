export class SerializeError extends Error {
  constructor(menssage: string, error: any) {
    super(`Error ${menssage} - ${error}`);
  }
}
