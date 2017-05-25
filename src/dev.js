import './dev.scss';

import ReactLoader from './main';

/*===example start===*/
class App extends React.Component{
  render(){
    return (
      <div className="hello-react-loader">
        <ReactLoader />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
