import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar'; // Adjust the path as needed
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Navbar Component', () => {
  let store;

  beforeEach(() => {
    // Set up initial state for the store
    store = mockStore({
      cart: {
        cart: [],
        cartTotalQuantity: 3, // Mocked quantity
      },
    });
  });

  test('renders the Navbar component with correct items', () => {
    // Render the Navbar component within Redux Provider and Router
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Check if the store name "SHOPEELAND" is rendered
    const storeName = screen.getByText(/SHOPEELAND/i);
    expect(storeName).toBeInTheDocument();

    // Check if "Home", "Catalog", "Blog", and "Contact" links are rendered
    const homeLink = screen.getByText(/Home/i);
    const catalogLink = screen.getByText(/Catalog/i);
    const blogLink = screen.getByText(/Blog/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    // Check if the wishlist icon (FiHeart) is rendered
    const wishlistIcon = screen.getByTitle('Wishlist');
    expect(wishlistIcon).toBeInTheDocument();

    // Check if the cart icon (FiShoppingCart) is rendered with the correct quantity
    const cartIcon = screen.getByTitle('Cart');
    expect(cartIcon).toBeInTheDocument();

    // Check if the cart quantity is correctly displayed
    const cartQuantity = screen.getByText(/3/i); // Mocked quantity
    expect(cartQuantity).toBeInTheDocument();
  });
});
