import React from 'react';

const Card = ({data}) => {
    return (
        <>
      <section className="py-5">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
            {data.map((element, index) => {
              return (
                <div key={index}>
                  <div className="card col " style={{ width: "18rem"}}>
                    <img
                      className="card-img-top"
                      src={element.img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text title"> {element.title}</p>
                      <p className="card-text author">by {element.author}</p>
                      <div className="status">
                        <p>{element.postDate}</p>
                        <p>{element.contentTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
    );
};

export default Card;