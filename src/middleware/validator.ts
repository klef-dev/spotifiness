import { query, ValidationChain } from "express-validator";

const searchRequest = (): ValidationChain[] => {
  return [query("query", "Query is required").exists().not().isEmpty()];
};

export { searchRequest };
