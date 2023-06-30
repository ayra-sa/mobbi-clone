import {
  Tabs,
  Tab,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import {
  CarRental,
  Garage,
  Inventory,
  Sell,
  TwoWheeler,
} from "@mui/icons-material";
import TabPanel from "./TabPanel";
import BeliMobilContent from "./BeliMobilContent";
import OtherContent from "./OtherContent";

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
    component: <BeliMobilContent />,
  },
  {
    component: <OtherContent />,
  },
  {
    component: <OtherContent />,
  },
  {
    component: <OtherContent />,
  },
  {
    component: <OtherContent />,
  },
];

export default function TabsComponent() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
              sx={{ display: "flex", alignItems: "center" }}
              variant={isMobile ? "scrollable" : "standard"}
            >
              {tabData.map((data, index) => (
                <Tab
                  key={index}
                  label={data.label}
                  icon={data.icon}
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{
                    flex: "1",
                    textTransform: "capitalize",
                    backgroundColor: value === index ? "#F5F6FA" : "inherit",
                    color: 'textTab'
                  }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      </Container>
      <Box sx={{ width: "100%" }}>
        {tabPanelData.map((data, index) => (
          <TabPanel key={index} value={value} index={index}>
            {data.component}
          </TabPanel>
        ))}
      </Box>
    </SectionWrapper>
  );
}
