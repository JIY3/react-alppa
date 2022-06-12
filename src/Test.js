import React from 'react';
import axios from 'axios';

function axiosGet() {
  axios
    .get(
      'https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?numOfRows=1000&pageNo=1&resultType=json&basDt=20220524&likeIsinCd=KR7005930003&serviceKey=PgGkEvjlV2fkES2afaz9U6PXDjDpiyRqX3kwm%2BAeOhMflysZB%2BVbNM%2B2Mcyw02fFolQRa6k4hVmuX%2F%2FWRMuu5Q%3D%3D'
    )
    .then((response) => {
      console.log(response.body.item);
    });
}

const Test = () => {
  axiosGet();
  return <div>test</div>;
};
export default Test;
