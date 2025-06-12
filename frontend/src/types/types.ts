export type Order = {
    id: string;
    user: {
      fullName: string;
      email: string;
    };
    table: {
      number: number;
    };
    status: string;
    total: number;
    createdAt: string;
    Order_Item: {
      id: string;
      quantity: number;
      menuItem: {
        name: string;
        imageUrl: string;
      };
    }[];
  };