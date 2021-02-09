import React from "react";

function ArticleSection(props) {
  return (
    <div className="article-header">
      <img
        className="article-picture"
        src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1570715240/hxdjthlymd9hgpbvaqro.jpg"
        alt="Failed to load"
      />
      <div>
        <h3>Bags</h3>
        <h5>Acme Stores</h5>
        <div className="article-small-menu">
          <div>
            <fieldset className="rating star">
              <input type="radio" id="field6_star5" name="rating2" value="5" />
              <label className="full" for="field6_star5"></label>
              <input type="radio" id="field6_star4" name="rating2" value="4" />
              <label className="full" for="field6_star4"></label>
              <input type="radio" id="field6_star3" name="rating2" value="3" />
              <label className="full" for="field6_star3"></label>
              <input type="radio" id="field6_star2" name="rating2" value="2" />
              <label className="full" for="field6_star2"></label>
              <input type="radio" id="field6_star1" name="rating2" value="1" />
              <label className="full" for="field6_star1"></label>
            </fieldset>
          </div>
          <div className="article-text">30,000 reviews</div>
          <div>
            <span className="heart"></span>{" "}
            <span className="article-text">40,000 likes</span>
          </div>
          <div>
            <img
              className="avatar-picture"
              src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1570715240/hxdjthlymd9hgpbvaqro.jpg"
              alt="Failed to load"
            />
            <img
              className="avatar-picture"
              src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1612861370/d0ap26yuevw6l6f3hjkz.jpg"
              alt="Failed to load"
            />
            <img
              className="avatar-picture"
              src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1575840602/qehcbmuy7jsaqqziozmt.jpg"
              alt="Failed to load"
            />
            <img
              className="avatar-picture"
              src="https://res.cloudinary.com/oladayoagbolade/image/upload/v1570715240/hxdjthlymd9hgpbvaqro.jpg"
              alt="Failed to load"
            />
          </div>
          <small className="article-text">
            liked by batman. han solo and others
          </small>
        </div>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label article-text" for="inlineRadio1">
              Size L
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label article-text" for="inlineRadio2">
              Size M
            </label>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <label className="form-label article-text">
              <b>Quantity:</b>
            </label>
            <select className="form-select">
              <option selected>100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
        <div className="article-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;
