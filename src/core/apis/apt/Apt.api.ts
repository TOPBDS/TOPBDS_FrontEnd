import { customAxios } from "../../util/customAxios";

class Apt {

    // 현재 위치 기준 10개의 매물 목록 가져오기
    public async getAptList(latitude: number, longitude: number): Promise<any> {
        try {
          const response = await customAxios.get(`/apt/find-all?lat=${latitude}&lon=${longitude}&size=10`);

          return response;
        } catch (e: any) {
          console.error(e);
          return e;
        }
    }

}

export default new Apt();