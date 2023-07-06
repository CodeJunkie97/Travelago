import "./featuredproperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
 
        <>
      
            <div className="fpItem">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                alt=""
                className="fpImg"
              />
              <span className="fpName">House</span>
              <span className="fpCity">Pittsburgh</span>
              <span className="fpPrice">Starting from $50,000</span>
            <div className="fpRating">
                <button>4.0</button>
                <span>Excellent</span>
              </div>
            </div>
        </>
    </div>
  );
};

export default FeaturedProperties;