import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import Slid from './Slid';
import HeaderMenu from '../Layout/HeaderMenu';
import Fotter from '../Layout/Fotter';


const Details = () => {

  return (
    <Container className="my-5">
      <HeaderMenu />
      <Row>
        {/* Left Section: Image Thumbnails and Main Image */}
        <Col md={6}>
          <Row>
            <Col xs={3} className="d-flex flex-column">
<Slid/>
            </Col>
            <Col xs={9}>
            </Col>
          </Row>
        </Col>

        {/* Right Section: Product Details */}
        <Col md={6}>
          <h2> আমাদের স্টকে চলে এসেছে জৈব ও ভার্মি মিক্সড পায়েল সার খুচরা প্রতি</h2>
          <p> | আপনার বারান্দা কিংবা ছাদে যে কোন ধরনের মেটাল রেক কাস্টমাইজড করে নিতে
      যোগাযোগ করুন ইনবক্সে অথবা হোয়াটসঅ্যাপ এ | আপনার বাগান সাজাতে প্রয়োজনীয়
      মেটাল রেক, বীজ, সার, মাটি অথবা ইনডোর প্লান্ট নিতে যোগাযোগ করুন ইনবক্সে

            </p>
            <h3>অর্ডার করতে ইনবক্স করুন
            অথবা কল করুন <br/>
            📞01580697263, <br/>
              01916631682
            </h3>

            <p> <h1>জৈব ও ভার্মি মিক্সড পায়েল সার </h1></p>

          <div className="d-flex align-items-center mb-2">
            <span className="me-2">4.1</span>
            <Badge bg="success">Amazon's Choice</Badge>
          </div>
          <p>1K+ bought in past month</p>

          {/* Price and Discount */}
          <div className="mb-3">
            <h3 className="text-danger">4990.00 ৳ <small className="text-muted text-decoration-line-through">$5138.70</small></h3>
            <p className="text-muted">+ 5356.71 ৳ Shipping & Import Fees Deposit to Addass</p>
          </div>

          {/* Capacity Options */}
          {/* <div className="mb-4">
            <h5>Capacity:</h5>
            <Button variant="outline-secondary" className="me-2 mb-2">8GB RAM | 128GB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">16GB RAM | 512GB SSD</Button>
            <Button variant="outline-primary" className="me-2 mb-2">32GB RAM | 1TB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">20GB RAM | 512GB SSD</Button>
          </div> */}

          {/* Quantity and Actions */}
          <Row className="align-items-center mb-3">
            <Col xs={3}>
              <select className="form-select">
                <option>Quantity: 1</option>
                <option>Quantity: 2</option>
                <option>Quantity: 3</option>
              </select>
            </Col>
            <Col>
              <Button variant="warning" className="w-100 mb-2" >Add to Cart</Button>
              <Button variant="primary" className="w-100" >Buy Now</Button>
            </Col>
          </Row>

          {/* Additional Product Info */}
          <div className="text-muted">
            <p><strong>ID:</strong> 85.04</p>
            <p><strong>Brand Name:</strong> Garden place </p>
            <p><strong>chare Size:</strong> 03.6 FT</p>
            <p><strong>Operating System:</strong> Windows 11 Home</p>
          </div>
        </Col>
      </Row>
      <Fotter/>
    </Container>
  );
};

export default Details;