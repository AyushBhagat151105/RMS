import { create } from "zustand";

// Define cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define store type
interface CartStore {
  tables: CartItem[];
  items?: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  pushItems?: () => void;
}

// Create the Zustand store with persist middleware
export const useMenuStore = create<CartStore>()((set,get) => ({
    tables:[],
        items:[],
        addItem: (item) => {
            const existingItem = (get().items ?? []).find((i) => i.id === item.id);
            // console.log(item);

            set((state) => ({
                tables: [...state.tables, item], // pushing item to tables array
            }));
            
            
            if (existingItem) {
                set ({
                    items: (get().items ?? []).map((i) =>
                        i.id === item.id ? {...i,quatity: i.quantity + item.quantity} : i
                    )
                })
            } else {
                set({items:[...(get().items ?? []),item]});
            }
        },

        removeItem: (id) => {
            set({items: get().items?.filter((i) => i.id !== id)})
        },

        clearCart: () => {
            set({items: []})
        },
}));
