import { customAxios } from "../../util/customAxios";

class Location {

    public async getLocaitonList(): Promise<any> {
      try {
        const response = await customAxios.get(`/location/find-all`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSubLocationList(lcId: number): Promise<any> {
      try {
        const response = await customAxios.get(`/location/find-all/${lcId}`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

}

export default new Location();