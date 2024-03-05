export interface ApiRequest {
  formValue: string;
}

export interface ApiResponse {
  result?: string;
  error?: string;
}
export type ConverterEndpoint =
  | "decimal-roman"
  | "binary-roman"
  | "kg-pound"
  | "cm-inch";
