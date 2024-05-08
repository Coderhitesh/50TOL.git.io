import React, { useState, useEffect } from 'react';
import './SinglePage.css';
import p1 from './img1.webp';
import p2 from './img2.webp';
import p3 from './img3.webp';
import p4 from './img4.webp';
import warrenty from './warrenty.png'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function SinglePage() {
  const [topImage, setTopImage] = useState('');
  const [clickedImage, setClickedImage] = useState(null);
  const [dynamicData, setDynamicData] = useState([]);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


  const initialData = [
    {
      id: 1,
      url: p1
    },
    {
      id: 2,
      url: p2
    },
    {
      id: 3,
      url: p3
    },
    {
      id: 4,
      url: p4
    }
  ];


  useEffect(() => {
    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(initialData);
        }, 1000);
      });
    };

    fetchData().then(data => {
      setDynamicData(data);
      if (data.length > 0) {
        setTopImage(data[0].url);
      }
    });
  }, []);

  const handleImageClick = (image) => {
    setTopImage(image.url);
    setClickedImage(image);
  };

  return (
    <section className='SinglePage-section'>
      <div className="SinglePage-container">
        <div className="left">
          <div className="up">
            <img src={topImage} alt="" />
          </div>
          <div className="down">
            {dynamicData.map(image => (
              <div
                key={image.id}
                className={`same-img ${clickedImage && clickedImage.id === image.id ? 'active' : ''}`}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.url} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h2>₹1,799</h2>
            <del>MRP ₹3,599</del>
            <span>Incl. of all taxes</span>
          </div>
          <h2>Anushka Sharma Silver Deer Heart Necklace</h2>
          <strong>Made with 925 Silver</strong>
          <div className="star">
            <i class="ri-star-fill"></i>
            <p>(4.8|304)</p>
          </div>
          <div className="des">
            <Accordion className='main-accordion-parent' open={open === 1}>
              <AccordionHeader className='accordion-heading' onClick={() => handleOpen(1)}>Description</AccordionHeader>
              <AccordionBody className='accordion-children'>
                This is the product description of this product and this product is best and we can wear this product in ragular base and we also wear this on parties.
              </AccordionBody>
            </Accordion>
            <Accordion className='main-accordion-parent' open={open === 2}>
              <AccordionHeader className='accordion-heading' onClick={() => handleOpen(2)}>
                Shipping
              </AccordionHeader>
              <AccordionBody className='accordion-children'>
                <ul>
                  <li>FREE Standard Delivery on orders over Rs. 499* (Excluding Sale Items). For same day delivery</li>
                  <li>FREE Standard Delivery on orders over Rs. 499*</li>
                  <li>Orders under Rs. 499 will be delivered within  2 working days.</li>
                  <li>For orders above Rs. 499, delivery will be made within 3 to 6 business days.*</li>
                  <li><b>Please note:</b> Orders placed between the hours of 12am and 5pm IST may take longer to deliver due to peak delivery times</li>
                  <li><b>Please note:</b> The estimated delivery date is subject to the availability of stock and other factors such as</li>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="services">
            <div className="col">
              <i class="ri-refund-2-fill"></i>
              <p>Easy 30 Day Return</p>
            </div>
            <div className="col">
              <img src={warrenty} alt="" />
              <p>1-Year Warranty</p>
            </div>
          </div>
          <div className="btns">
            <a href="" className='btn-grad'>Add to Cart</a>
            <a href="" className='btn-grad'>Buy Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;