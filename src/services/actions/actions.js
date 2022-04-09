import { LOAD_PDF } from "../Constants";
export const loadPdf = (data) => {
  return {
    type: LOAD_PDF,
    data: data,
  };
};
