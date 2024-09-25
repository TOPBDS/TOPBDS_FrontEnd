import axios from "axios";
import { customAxios } from "../../util/customAxios";
import config from "../../config/config";

class Apt {

  public async getMapAptList(latitude: number, longitude: number, type: string, rentType: string, sfMin: number, sfMax: number, apMin: number, apMax: number, farMin: number, farMax: number, btlrMin: number, btlrMax: number, jprMin: number, jprMax: number, gpMin: number, gpMax: number, rbrMin: number, rbrMax: number, mprMin: number, mprMax: number): Promise<any> {
    try {
      const response = await axios.get(`${config.config}/server/apt/map/apt-info/find-all?lat=${latitude}&lon=${longitude}&type=${type}&rent-type=${rentType}&sf-min=${sfMin}&sf-max=${sfMax}&ap-min=${apMin}&ap-max=${apMax}&far-min=${farMin}&far-max=${farMax}&btlr-min=${btlrMin}&btlr-max=${btlrMax}&jpr-min=${jprMin}&jpr-max=${jprMax}&gp-min=${gpMin}&gp-max=${gpMax}&rbr-min=${rbrMin}&rbr-max=${rbrMax}&mpr-min=${mprMin}&mpr-max=${mprMax}&page=0&size=10`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getAptList(latitude: number, longitude: number, page: number): Promise<any> {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-info/find-all?page=${page}&size=10&lat=${latitude}&lon=${longitude}`);

      return response?.data?.data?.data;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getAptInfo(aptId: number): Promise<any> {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-info/${aptId}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getAptLike(aptId: number): Promise<any> {
    try {
      const response = await customAxios.get(`/server/apt/like/${aptId}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getUnsoldAptList(page: number, sgg: string, unsoldStartDate: number, unsoldEndDate: number): Promise<any> {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-unsold/find-all?page=${page}&size=10&sgg=${sgg}&start-year=${unsoldStartDate}&end-year=${unsoldEndDate}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getDeclineAptList(page: number, sgg: string, dong: string, startDate: string, endDate: string): Promise<any> {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-decline/find-all?page=${page}&size=10&sgg=${sgg}&dong=${dong}&start-date=${startDate}&end-date=${endDate}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getLargeComplexList(page: number, sgg: string, aptName: string, startNumber: string, endNumber: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-large-complex/find-all?page=${page}&size=10&sgg=${sgg}&apt-name=${aptName}&start-number=${startNumber}&end-number=${endNumber}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getPeopleChangeList(page: number, viewType: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-people-change/find-all?page=${page}&size=10&view-type=${viewType}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getPredictionList(page: number, sgg: string, day: number, order: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-prediction/find-all?page=${page}&size=10&sgg=${sgg}&day=${day}&order=${order}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getSupplyVolumeList(page: number, sggList: string[], periodType: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-supply-volume/find-all?page=${page}&size=10&sgg-list=${sggList}&period-type=${periodType}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getRiseList(page: number, sgg: string, dong: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-rise/find-all?page=${page}&size=10&sgg=${sgg}&dong=${dong}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getCompareList(page: number, aptList: string[], startDate: string, endDate: string) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-compare/find-all?page=${page}&size=10&sgg-list=${aptList}&start-date=${startDate}&end-date=${endDate}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getReviewList(page: number, aptId: number) {
    try {
      const response = await axios.get(`${config.config}/server/apt/apt-review/find-all?page=${page}&apt-id=${aptId}&size=10`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async createReview(comment: string, review: number, aptId: number) {
    try {
      const response = await customAxios.post(`/server/apt/apt-review/create/${aptId}`, {
        review,
        comment
      });

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getInterestAptList() {
    try {
      const response = await customAxios.get(`${config.config}/server/apt/like/find-all`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async setInterestApt(aptId: number, status: boolean) {
    try {
      const response = await customAxios.post(`/server/apt/like/${aptId}`, {
        status
      });

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getReportData(aptName: string, squareFootage: string, minYear: number, maxYear: number) {
    try {
      const response = await customAxios.get(`/server/report/apt/list?page=1&size=100&apt-name=${aptName}&sf=${squareFootage}&min-year=${minYear}&max-year=${maxYear}`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getSggReportData() {
    try {
      const response = await customAxios.get(`/server/report/sgg/list?page=1&size=100`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getPredictionReportData(aptName: string, squareFootage: string, minYear: number, maxYear: number) {
    try {
      const response = await customAxios.get(`/server/report/prediction/list?apt-name=${aptName}&sf=${squareFootage}&min-year=${minYear}&max-year=${maxYear}&page=1&size=100`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getAptNameList() {
    try {
      const response = await axios.get(`/server/apt/name/list`);

      return response;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

  public async getAptAPIList(page: number, apt: string): Promise<any> {
    try {
      const response = await axios.post(`${config.apiConfig}/api/sel-real?limit=10&page=${page}&apt=${apt}`, null, {
        headers: {
          "api": config.apiHeader
        }
      });

      return response?.data?.data;
    } catch (e: any) {
      console.error(e);
      return e;
    }
  }

}

export default new Apt();