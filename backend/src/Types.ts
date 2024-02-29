export type NotesType = {
  key1: string;
  key2: string;
};

export type PaymentDatatypes = {
  // the amount must be in multiple of 100, eg. 20 rupees will be 20 X 100 = 2000
  amount: number;
  // use currency as ENUM
  currency: string;
  reciept: string;
  notes: NotesType;
};
