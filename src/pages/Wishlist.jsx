import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItems, toggleSelect, toggleSelectAll, removeItem } from '../store/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist); // Access the 'wishlist' array from the state
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      dispatch(toggleSelectAll(true));
    } else {
      dispatch(toggleSelectAll(false));
    }
  }, [selectAll, dispatch]);

  const handleBulkDelete = () => {
    dispatch(removeItems());
  };

  return (
    <div className="flex justify-center min-h-full mb-8">
    
      <div className="w-full max-w-6xl p-4 mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">My Wishlist ({wishlist.length})</h1>
          {wishlist.length > 0 &&
              <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectAll}
                onChange={(e) => setSelectAll(e.target.checked)}
              />
              <span className='text-gray-700'>Select All</span>
              <button
                className="w-40 h-auto px-4 py-2 ml-4 text-white bg-red-500 rounded-lg"
                onClick={handleBulkDelete}
                disabled={wishlist.filter((item) => item.selected).length === 0}
              >
                Delete Selected
              </button>
            </div>
          }
        </div>

        {wishlist.length > 0 ? (
          <div>
            {wishlist.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-50">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => dispatch(toggleSelect(item.id))}
                  />
                  <img src={item?.images[1]} alt={item.name} className="w-20 h-20 mx-4" draggable={false}
                  />
                  <div>
                    <h2 className="text-lg font-medium text-gray-700">{item.name}</h2>
                    <p className='text-gray-600'>$ {item.price}</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 bg-gray-200 border border-gray-300 rounded-full hover:bg-gray-300"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
