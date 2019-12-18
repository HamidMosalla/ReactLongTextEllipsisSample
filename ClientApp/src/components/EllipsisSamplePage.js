import React from 'react';
import { connect } from 'react-redux';
import EllipsisComponent from './EllipsisComponent';

const EllipsisSamplePage = props => (
  <div>

    <h1>Usage Sample</h1>

    <br></br>

    <EllipsisComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor mollis gravida. Donec a accumsan quam, vel tempus lorem. Proin venenatis quam eu lectus dapibus malesuada. Aliquam maximus pellentesque diam, quis fringilla lorem dictum in. Suspendisse ipsum neque, vehicula in tortor eget, eleifend facilisis libero. Pellentesque ornare lacinia metus at feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan metus sit amet tellus cursus volutpat. Curabitur laoreet interdum elit, in vestibulum odio consectetur id. Quisque sodales fermentum pretium. Praesent in metus ultrices, euismod nisl eu, vehicula nisl. Sed eu ante ac quam scelerisque feugiat." maxLength={100} />

  </div>
);

export default connect()(EllipsisSamplePage);
