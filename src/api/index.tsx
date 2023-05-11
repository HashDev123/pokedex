import axios from "axios";
import {
  ICreatureDataResponse,
  IgetCreatureDataList,
  ICreatureTypesResponse,
} from "../types";

export const getCreaturesDataList = async ({
  offset,
}: IgetCreatureDataList): Promise<ICreatureDataResponse> => {
  try {
    const response = await axios.get<ICreatureDataResponse>(
      `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`
    );

    const creatureList = response.data.results;

    const requests = creatureList.map(async (creature) => {
      const creatureResponse = await axios.get(creature.url);
      creature.data = creatureResponse.data;
      return creature;
    });

    const updatedCreatureList = await Promise.all(requests);
    response.data.results = updatedCreatureList;
    return response.data;
  } catch (error) {
    console.log("Something went wrong");
    throw error;
  }
};

export const getCreatureTypesList =
  async (): Promise<ICreatureTypesResponse> => {
    try {
      const response = await axios.get<ICreatureDataResponse>(
        "https://pokeapi.co/api/v2/type"
      );
      return response.data;
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  };
