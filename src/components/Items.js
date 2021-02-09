function Items(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt="Failed to load" />
      <div className="card-body">
        <p className="card-text">
          <div className="small-menu">
            <div className="small-title">{props.itemName}</div>
            <div className="sub-text">
              <fieldset className="rating star">
                <input
                  type="radio"
                  id="field6_star5"
                  name="rating2"
                  value="5"
                />
                <label className="full" for="field6_star5"></label>
                <input
                  type="radio"
                  id="field6_star4"
                  name="rating2"
                  value="4"
                />
                <label className="full" for="field6_star4"></label>
                <input
                  type="radio"
                  id="field6_star3"
                  name="rating2"
                  value="3"
                />
                <label className="full" for="field6_star3"></label>
                <input
                  type="radio"
                  id="field6_star2"
                  name="rating2"
                  value="2"
                />
                <label className="full" for="field6_star2"></label>
                <input
                  type="radio"
                  id="field6_star1"
                  name="rating2"
                  value="1"
                />
                <label className="full" for="field6_star1"></label>
              </fieldset>
            </div>
            <div className="small-title">{props.itemPrice}</div>
            <div className="text-muted sub-text">{props.storeName}</div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Items;
