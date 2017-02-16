import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
// import axios from 'axios';
import Product from './Product';
import ProductData from '../ProductList.json';


class ProductList extends Component {

  renderProducts() {
    console.log(this.state);
    return ProductData.map(product =>
      <Product
        key={product.title}
        product={product} />
    );
  }

  render() {
    return (
      <View>
        <Image style={{ justifyContent: 'center', alignSelf: 'center', height: 76, marginTop: 80 }} source={require('../img/loggo.png')} alt="" />
        <ScrollView>
          {this.renderProducts()}
        </ScrollView>
      </View>

    );
  }
}

export default ProductList;
