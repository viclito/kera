import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Card from '@mui/material/Card';
import { Box, Tab, Tabs, alpha, CircularProgress } from '@mui/material';

export default function FpcDetailsForm({ FpcId }) {
  const [selectedTab, setSelectedTab] = useState('1');
  const [technicalFormData, setTechnicalFormData] = useState({});

  // Fetch land details using React Query

  const handleTabChange = (event, newValue) => {
    if (selectedTab === '2') {
      setSelectedTab(newValue);
    }
  };

  const handleTechnicalSubmission = ({ technicalData, tabID }) => {
    setSelectedTab(tabID);
    setTechnicalFormData(technicalData);
  };

  const tabData = [
    {
      tabName: 'Technical Form',
      tabId: '1',
      tabContent: '',
    },
    {
      tabName: 'Financial Form',
      tabId: '2',
      tabContent: '',
    },
  ];

  return (
    <Card sx={{ px: 2.5, pb: 3 }}>
      {FpcId ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px', // Adjust height as needed
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {tabData?.map((tab) => (
              <Tab key={tab.tabId} value={tab.tabId} label={tab.tabName} />
            ))}
          </Tabs>
          <div style={{ marginTop: 16 }}>
            {tabData.find((tab) => tab.tabId === selectedTab)?.tabContent}
          </div>
        </>
      )}
    </Card>
  );
}

FpcDetailsForm.propTypes = {
  FpcId: PropTypes.string,
};
