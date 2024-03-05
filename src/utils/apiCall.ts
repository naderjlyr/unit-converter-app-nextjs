import axios from "axios";
import { ConverterEndpoint } from "@/types";
import { ApiResponse } from "@/types/api";

async function fetchConversion(
  converterEndpoint: ConverterEndpoint | null,
  formValue: string
): Promise<string> {
  if (!converterEndpoint) {
    throw new Error("Converter endpoint is null");
  }

  try {
    const response = await axios.post<ApiResponse>(
      `/api/converter/${converterEndpoint}`,
      {
        formValue,
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    if (response.data.result !== undefined) {
      return response.data.result;
    } else {
      throw new Error("No result from conversion");
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        `API error: ${error.response.status} ${error.response.data}`
      );
    } else {
      throw new Error(
        `Failed to fetch conversion: ${error instanceof Error ? error.message : error}`
      );
    }
  }
}

export default fetchConversion;
