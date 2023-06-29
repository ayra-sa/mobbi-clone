import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "./carousel/Carousel";
import ResultCard from "./card/ResultCard";
import { SwiperSlide } from "swiper/react";

type ResultProps = {
  activeButton: string | null;
};

const ResultContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "gray",
  padding: "2rem 1rem",
}));

const results = [
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
];

export default function Result({ activeButton }: ResultProps) {
  switch (activeButton) {
    case "Mitsubishi":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Mitsubishi" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Abc":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Abc" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Def":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Def" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Drea":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Drea" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Kill":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Kill" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Reas":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Reas" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Mnb":
      return (
        <ResultContainer>
          <Carousel view={5} slidesPerGroup={5} pagination={false} loop={false}>
            {results.map((res, index) => (
              <SwiperSlide key={index}>
                <ResultCard title="Mnb" amount={res.amount} detail={res.detail} />
              </SwiperSlide>
            ))}
          </Carousel>
        </ResultContainer>
      );
    default:
      return null;
  }
}
