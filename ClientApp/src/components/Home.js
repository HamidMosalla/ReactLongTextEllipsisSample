import React from 'react';
import { connect } from 'react-redux';
import EllipsisComponent from './EllipsisComponent';

const Home = props => (
  <div>

    <EllipsisComponent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor mollis gravida. Donec a accumsan quam, vel tempus lorem. Proin venenatis quam eu lectus dapibus malesuada. Aliquam maximus pellentesque diam, quis fringilla lorem dictum in. Suspendisse ipsum neque, vehicula in tortor eget, eleifend facilisis libero. Pellentesque ornare lacinia metus at feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan metus sit amet tellus cursus volutpat. Curabitur laoreet interdum elit, in vestibulum odio consectetur id. Quisque sodales fermentum pretium. Praesent in metus ultrices, euismod nisl eu, vehicula nisl. Sed eu ante ac quam scelerisque feugiat." maxLength={100} />

    <h1>Hello, world!</h1>
    <p>Welcome to your new single-page application, built with:</p>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
    </ul>
    <p>To help you get started, we've also set up:</p>
    <ul>
      <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
    </ul>
    <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
  </div>
);

export default connect()(Home);
