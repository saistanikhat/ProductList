import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

import { connect } from 'react-redux'
// import { addToCart } from '../actions'
import { getVisibleProducts } from '../Reducer/products'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItem: {},
      isProdItemCicked: false
    };
    this.handleProductItem = this.handleProductItem.bind(this)
  }
  handleProductItem(prod, event){
      this.setState({
        productItem:prod,
        isProdItemCicked: true
      });
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <h3>Products</h3>
        {products.map(product => (
          <div onClick = {this.handleProductItem.bind(this, product)}>
          <ProductItem key={product.id} product={product}  />
          </div>
        ))}
        {
          this.state.isProdItemCicked && this.state.productItem ?
              <ProductItem key={this.state.productItem.id} product={this.state.productItem}  />
              :
              null
        }
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default connect(
  state => ({ products: getVisibleProducts(state.products) })
)(ProductList)
