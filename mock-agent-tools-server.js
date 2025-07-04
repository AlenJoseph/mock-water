const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

/**
 * Tool: lookupCustomerAccount
 * Input: { accountNumber }
 * Output: customer data
 */
app.post('/lookupCustomerAccount', (req, res) => {
  const { accountNumber } = req.body;

  const mockData = {
    "123": {
      name: "Mr. Ahmed",
      couponsLeft: 3,
      deliveryDay: "Thursday",
      address: "Doha, Zone 55",
      loyaltyTier: "Gold"
    },
    "456": {
      name: "Ms. Fatima",
      couponsLeft: 12,
      deliveryDay: "Monday",
      address: "Al Wakrah, Street 10",
      loyaltyTier: "Platinum"
    }
  };

  const result = mockData[accountNumber];
  if (result) {
    res.json({ status: 'success', data: result });
  } else {
    res.status(404).json({ status: 'error', message: 'Customer not found' });
  }
});

/**
 * Tool: checkDeliverySchedule
 */
app.post('/checkDeliverySchedule', (req, res) => {
  const { accountNumber } = req.body;
  // Dummy delivery schedule
  res.json({
    status: 'success',
    data: {
      nextDelivery: '2025-07-06',
      timeSlot: '9:00 AM – 12:00 PM'
    }
  });
});

/**
 * Tool: checkPromotions
 */
app.post('/checkPromotions', (req, res) => {
  res.json({
    status: 'success',
    data: {
      offer: "50 coupons + 12 free for 325 QAR",
      averagePrice: "5.24 QAR per bottle"
    }
  });
});

/**
 * Tool: createSupportTicket
 */
app.post('/createSupportTicket', (req, res) => {
  console.log('Support ticket created:', req.body);
  res.json({ status: 'success', ticketId: 'TICKET12345' });
});

/**
 * Tool: scheduleCallback
 */
app.post('/scheduleCallback', (req, res) => {
  console.log('Callback scheduled:', req.body);
  res.json({ status: 'success', message: 'Callback scheduled.' });
});

/**
 * Tool: switchLanguage
 */
app.post('/switchLanguage', (req, res) => {
  const { language } = req.body;
  res.json({ status: 'success', message: `Language switched to ${language}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Mock tool server running at http://localhost:${PORT}`);
});
