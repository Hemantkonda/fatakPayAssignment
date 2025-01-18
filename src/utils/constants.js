export const SCREENS_TITLE = {
  CREDIT_REPORT: 'Credit Report',
  ORDER_IN_PROCESS: 'order-in-process',
  YOUR_CREDIT_REPORT: 'Your Credit Report',
  WHAT_IS_IMPACTING_YOUR_SCORE: 'What is impacting your score',
  PATMENT_HISTORY : 'Payment History',
  NOT_AVAILABLE: 'Not Available',
  ON_TIME_PAYMENT: 'On Time Payment',
  DELAYED: 'Delayed'
};

export const DUMMY_CARD_DATA = [
  {
    title: 'Payments',
    subTitle: 'Timely Payments',
    status: 'Excellent',
    navigation: true,
  },
  {
    title: 'Limits',
    subTitle: 'Credit limit Used',
    status: 'Excellent',
    navigation: false,
  },
  {
    title: 'Age',
    subTitle: 'Age of Accounts',
    status: 'Excellent',
    navigation: false,
  },
  {
    title: 'Accounts',
    subTitle: 'Active Accounts',
    status: 'Excellent',
    navigation: false,
  },
  {
    title: 'Enquiries',
    subTitle: 'Total Enquiries',
    status: 'Low',
    navigation: false,
  },
  {
    title: 'Profile',
    subTitle: 'Derogatory marks',
    status: 'Low',
    navigation: false,
  },
];

export const DETAILS_DATA = {
  record: {
    data: {
      bank_name: 'HDFC Bank',
      type_of_loan: 'Personal Loan',
      issued_on: '25 Jan 2025',
      account_status: 'Active',
      amount_paid: '25,000',
      total_loan_amount: '50,000',
      loan_tenure: '12 Month',
      payment_percentage: '35%',
      payment_history: {
        last_updated_on: '05 May 2024',
        payment_summary: [
          {
            year: '2023',
            summary: [
              'NA',
              'NA',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'DELAYED',
              'DELAYED',
              'NA',
              'NA',
            ],
          },
          {
            year: '2024',
            summary: [
              'NA',
              'NA',
              'NA',
              'NA',
              'NA',
              'PAID',
              'PAID',
              'PAID',
              'DELAYED',
              'PAID',
              'PAID',
              'NA',
            ],
          },
        ],
      },
    },
  },
  metadata: {
    id: '6787c565ad19ca34f8ed9333',
    private: false,
    createdAt: '2025-01-15T14:25:41.899Z',
    collectionId: '6784e89ee41b4d34e476a0ee',
    name: 'Screen_two_updated.json',
  },
};
