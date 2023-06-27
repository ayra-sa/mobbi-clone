import { Tabs, Tab, Typography, Box, Container, Button } from "@mui/material";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import ImageItem from "./ImageItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabData = [
  { label: "Beli Mobil" },
  { label: "Jual Mobil" },
  { label: "Beli Motor" },
  { label: "Rental Mobil" },
  { label: "Bengkel" },
];

const tabPanelData = [
  {
    label: "Beli Mobil",
    title: "Jual Mobil Anda di Showroom sekarang juga.",
    desc: "Jual dengan harga tinggi",
    link: "#",
    image: "https://placeimg.com/640/480/tech",
    button: "Jual Sekarang"
  },
  {
    label: "Jual Mobil",
    title: "Jual Mobil Anda di Showroom sekarang juga.",
    desc: "Jual dengan harga tinggi",
    link: "#",
    image: "https://placeimg.com/640/480/people",
    button: "Jual Sekarang"
  },
  {
    label: "Beli Motor",
    title: "Jual Mobil Anda di Showroom sekarang juga.",
    desc: "Jual dengan harga tinggi",
    link: "#",
    image: "https://placeimg.com/640/480/nature",
    button: "Jual Sekarang"
  },
  {
    label: "Rental Mobil",
    title: "Jual Mobil Anda di Showroom sekarang juga.",
    desc: "Jual dengan harga tinggi",
    link: "#",
    image: "https://placeimg.com/640/480/tech",
    button: "Jual Sekarang"
  },
  {
    label: "Bengkel",
    title: "Jual Mobil Anda di Showroom sekarang juga.",
    desc: "Jual dengan harga tinggi",
    link: "#",
    image: "https://placeimg.com/640/480/tech",
    button: "Jual Sekarang"
  },
];

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionWrapper>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ display: "flex", alignItems: "center", color: "#02A3FE" }}
            >
              {tabData.map((data, index) => (
                <Tab
                  key={index}
                  label={data.label}
                  sx={{
                    flex: "1",
                    textTransform: "capitalize",
                    backgroundColor: value === index ? "#F5F6FA" : "inherit",
                    color: value === index ? "#02A3FE" : "#717171",
                  }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ width: "100%" }}>
            {tabPanelData.map((data, index) => (
              <TabPanel key={index} value={value} index={index}>
                <Typography variant="h2" component={"h1"}>
                  {data.label}
                </Typography>
                <Box sx={{ display: "flex", alignItems: 'center', columnGap: '50px', mt: '2rem' }}>
                  <Box sx={{flex: '1'}}>
                    <Typography variant="h3" component={"h2"}>
                      {data.title}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                      {data.desc}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: "3rem", textTransform: "capitalize" }}
                    >
                      {data.button}
                    </Button>
                  </Box>
                  <Box sx={{flex: '1'}}>
                    <ImageItem alt={data.title} image={data.image} />
                  </Box>
                </Box>
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
