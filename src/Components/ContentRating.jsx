
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,

        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
        Cloud engineering is the practice of designing, building, and managing cloud-based systems and infrastructure. It involves working with cloud service providers like AWS, Azure, or Google Cloud to deploy scalable, secure, and cost-effective solutions. Cloud engineers specialize in areas such as cloud architecture, DevOps, security, and networking. They use automation tools like Terraform, CI/CD pipelines, and containerization (e.g., Docker, Kubernetes) to streamline operations. Cloud engineering is essential for modern businesses, enabling flexibility, reliability, and performance. Professionals in this field need expertise in cloud platforms, scripting, networking, and security to optimize cloud environments efficiently.
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
