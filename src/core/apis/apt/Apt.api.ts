import { customAxios } from "../../util/customAxios";

class Apt {

    public async getAptList(latitude: number, longitude: number, page: number, type: string, rentType: string): Promise<any> {
      try {
        const response = await customAxios.get(`/apt/apt-info/find-all?page=${page}&lat=${latitude}&lon=${longitude}&type=${type}7rent-type=${rentType}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getAptInfo(aptId: number): Promise<any> {
      try {
        const response = await customAxios.get(`/apt/apt-info/${aptId}`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getUnsoldAptList(page: number, lcId: number, slcId: number, unsoldStartDate: Date, unsoldEndDate: Date): Promise<any> {
      try {
        const response = await customAxios.get(`/apt/apt-unsold/find-all?page=${page}&size=10&lc-id=${lcId}&slc-id=${slcId}&unsold-start-date=${unsoldStartDate}&unsold-end-date=${unsoldEndDate}`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getDeclineAptList(page: number, lcId: number, slcId: number, aptNumber: number, aptTopPrice: number, aptReview: number, aptRentType: string, aptContractDate: Date): Promise<any> {
      try {
        const response = await customAxios.get(`/apt/apt-decline/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&apt-number=${aptNumber}&apt-top-price=${aptTopPrice}&apt-review=${aptReview}&apt-rent-type=${aptRentType}&apt-contract-date=${aptContractDate}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getLargeComplexList(page: number, lcId: number, slcId: number, aptNumber: number, aptName: string, aptAddress: string) {
      try {
        const response = await customAxios.get(`/apt/apt-large-complex/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&apt-number=${aptNumber}&apt-name=${aptName}&aptAddress=${aptAddress}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getPeopleChangeList(page: number, lcId: number, slcId: number, viewType: string) {
      try {
        const response = await customAxios.get(`/apt/apt-people-change/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&view-type=${viewType}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getPredictionList(page: number, lcId: number, slcId: number, aptRentType: string, aptDate: Date) {
      try {
        const response = await customAxios.get(`/apt/apt-people-change/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&apt-rent-type=${aptRentType}&apt-date=${aptDate}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getSupplyVolumeList(page: number, lcId: number, slcId: number, viewType: string, supplyVolumeDate: Date) {
      try {
        const response = await customAxios.get(`/apt/apt-people-change/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&view-type=${viewType}&sv-apt-date=${supplyVolumeDate}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getRiseList(page: number, lcId: number, slcId: number, aptRentType: string) {
      try {
        const response = await customAxios.get(`/apt/apt-people-change/find-all?page=${page}&lc-id=${lcId}&slc-id=${slcId}&apt-rent-type=${aptRentType}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

    public async getReviewList(page: number, aptId: number) {
      try {
        const response = await customAxios.get(`/apt/apt-people-change/find-all?page=${page}&apt-id=${aptId}&size=10`);

        return response;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    }

}

export default new Apt();