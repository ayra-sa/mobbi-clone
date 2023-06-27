import { Tabs, Tab, Typography, Box, Container, Button, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ImageItem from "./ImageItem";
import { CarRental, Garage, Inventory, Sell, TwoWheeler } from "@mui/icons-material";

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
      {value === index && <Box sx={{ p: {xs: 1, md: 3} }}>{children}</Box>}
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
  { label: "Beli Mobil", icon: <Inventory /> },
  { label: "Jual Mobil", icon: <Sell /> },
  { label: "Beli Motor", icon: <TwoWheeler /> },
  { label: "Rental Mobil", icon: <CarRental /> },
  { label: "Bengkel", icon: <Garage /> },
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
              aria-label="tab"
              textColor="secondary"
              indicatorColor="secondary"
              sx={{ display: "flex", alignItems: "center", color: "#02A3FE" }}
              variant={isMobile ? 'scrollable' : 'standard'}
            >
              {tabData.map((data, index) => (
                <Tab
                  key={index}
                  label={data.label}
                  icon={data.icon}
                  iconPosition={isMobile ? 'top' : 'start'}
                  sx={{
                    flex: "1",
                    textTransform: "capitalize",
                    backgroundColor: value === index ? "#F5F6FA" : "inherit"
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
                <Box sx={{ display: "flex", alignItems: {xs: 'unset', md: 'center'}, gap: '50px', mt: '2rem', flexDirection: {xs: 'column-reverse', md: 'row'} }}>
                  <Box sx={{flex: '1'}}>
                    <Typography variant="h3" component={"h2"}>
                      {data.title}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"} sx={{mt: '1rem'}}>
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
