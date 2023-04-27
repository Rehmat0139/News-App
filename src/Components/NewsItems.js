import React, { Component } from 'react'
import './style.css';
// import { Link } from 'react-router-dom';

export class NewsItems extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <span className="position-absolute top-0 translate-left badge rounded-pill bg-danger">
                        {source}</span>
                    <img src={imgUrl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary btn-dark">Get Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems