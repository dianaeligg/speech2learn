import axios from "axios";

export type WordResponse = {
  word: string;
};

export type Response = {
  data: WordResponse;
};

export default {
  getNewWord: (): Promise<Response> => {
    return axios.get("/api/word/");
  },
};
