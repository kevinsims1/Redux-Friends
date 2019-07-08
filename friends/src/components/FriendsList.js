import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

//   formatData = () => {
//     const formattedData = [];
//     this.props.friends.forEach(() => {
//         formattedData.push({
//             id: this.props.friends.id,
//             name: this.props.friends.name,
//             age: this.props.friends.age,
//             email: this.props.friends.email,
//         }); 
//     });
//     return formattedData;
//   };

  render() {
    // const friends = this.formatData();
    return (
      <div className="friends-list">
          <div className="title">
              <div className="top-title">FriendsList</div> 
          </div>
        
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.props.error && <h4>{this.props.error}</h4>}
        {!this.props.fetchingData && this.props.friends.length > 0 && (
          <div className="friend-wrapper">         
              <div>
                {this.props.friends.map(friends => (
                  <div className="friend">                    
                      <p>{friends.age}</p> 
                      <p>{friends.email}</p>  
                      <p>{friends.age}</p> 
                      <p>{this.props.experiment}</p>                  
                    </div>                   
                ))}
              </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ error, friends, fetchingData, experiment }) => ({
  error,
  friends,
  fetchingData,
  experiment
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);