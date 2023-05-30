import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { auth, db } from './Config';
import { FaShoppingCart } from 'react-icons/fa';

function Product() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [fullName, setFullName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, 'userCredential', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setFullName(userDocSnapshot.data().fullName);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'Products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    if (user) {
      fetchUserData();
    }
    fetchProducts();
  }, [user]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/Login');
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };

  return (
    <div>
      <div className="navbar-p">
        <div className="navbar-container-p">
          <div className="navbar-logo-p">
            <a className="header-envato_market-p" href="#">
              SuperSonic
            </a>
          </div>
          <div className="navbar-actions-p">
            {user && (
              <a href="#" target="_blank" rel="noopener noreferrer" className="icon shoppingCart">
                <FaShoppingCart />
              </a>
            )}
            {user ? (
              <>
                <button className="header-buy-now e-btn--3d -color-primary" onClick={handleLogout}>
                  Logout
                </button>
                <span style={{ fontStyle: 'italic', position: 'relative', right: '50%', fontFamily:'Poppins', fontSize: '14px', color: 'white' }}>Welcome, {fullName}</span>

              </>
            ) : (
              <>
                <Link to="/Login" className="header-buy-now e-btn--3d -color-primary">
                  Login
                </Link>
                <Link to="/Signup" className="header-buy-now e-btn--3d -color-primary">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
   
      <div className="product-container">
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.url} alt={product.title} className="product-image" />
              <h3 className="product-name">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
