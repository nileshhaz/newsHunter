import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://th.bing.com/th/id/OIP.M6BrmRH7oHsgVAVdHR6xRgHaEK?pid=ImgDet&rs=1"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary">
              View more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
