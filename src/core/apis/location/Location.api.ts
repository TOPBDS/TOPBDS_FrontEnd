import axios from "axios";
import config from "../../config/config";

class Location {

    public async getLocaitonList(): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/find-all`);

        return response.data.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSubLocationList(lcId: number): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/find-all/${lcId}`);

        return response.data.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getUnsoldSgg(): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-unsold/sgg/find-all?page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getUnsoldSgg2(sgg: string): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-unsold/sgg2/find-all?sgg=${sgg}&page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggLargeComplex(): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-large-complex/sgg/find-all?page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggLargeComplex2(sgg: string): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-large-complex/sgg2/find-all?sgg=${sgg}&page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggReal(): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-real/sgg/find-all?page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggReal2(sgg: string): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-real/sgg2/find-all?sgg=${sgg}&page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getDongReal(sgg: string): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-real/dong/find-all?sgg=${sgg}&page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggUpComSupply(): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-up-com-supply/sgg/find-all?page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSggUpComSupply2(sgg: string): Promise<any> {
      try {
        const response = await axios.get(`${config.config}/server/location/apt-up-com-supply/sgg2/find-all?sgg=${sgg}&page=1`);

        return response.data.data;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

}

export default new Location();