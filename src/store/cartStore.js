import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [], 

      addToCart: (book) => set((state) => {
        const existingBookIndex = state.cart.findIndex(item => item.id === book.id);

        if (existingBookIndex >= 0) {
          const updatedCart = [...state.cart];
          updatedCart[existingBookIndex].quantity += 1;
          return { cart: updatedCart };
        } else {
          return { cart: [...state.cart, { ...book, quantity: 1 }] };
        }
      }),

      removeFromCart: (bookId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== bookId),
      })),

      clearCart: () => set(() => ({
        cart: [],
      })),

      getTotal: () => {
        const cart = get().cart;
        return cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0); 
      }
    }),
    {
      name: 'cart-storage',
      getStorage: () => sessionStorage,
    }
  )
);