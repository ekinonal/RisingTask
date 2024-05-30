"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useRouter } from "next/navigation";

interface InfoData {
  expireTime: string;
  lastChargeAmount: string;
  lastCharge: string;
  totalDataUsage: string;
  dailyUsage: string;
}

const CardContainer: React.FC = () => {
  const [infoData, setInfoData] = useState<InfoData | null>(null);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetchInfoData(token);
    }
  }, []);

  const fetchInfoData = async (token: string) => {
    try {
      const response = await axios.get(
        "https://recruitment-api.vercel.app/get-info",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setInfoData(response.data);
    } catch (error) {
      if(error.response.status == 400){
      Cookies.remove("token");
      router.push("/");
    }
    }
  };

  return (
    <div className="mx-auto w-10/12  flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4 lg:w-4/5">
      {infoData ? (
        <>
          <Card title="Subscription expires on" value={infoData.expireTime} />
          <Card
            title="Last charge"
            value={infoData.lastChargeAmount}
            subtitle={infoData.lastCharge}
          />
          <Card
            title="Total Usage Data"
            value={`${(parseFloat(infoData.totalDataUsage) / 1000).toFixed(
              3
            )} GB`}
          />
          <Card
            title="Daily Usage Data"
            value={`${(parseFloat(infoData.dailyUsage) / 1000).toFixed(3)} GB`}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardContainer;
