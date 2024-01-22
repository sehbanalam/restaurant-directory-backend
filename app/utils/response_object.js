export class response_object {
  constructor(data = {}, status = 404, error = { code: "000", message: "" }) {
    this.data = data;
    this.status = status;
    this.error = error;
  }
}
