import React from "react";

function TailorShop() {
  // ✅ Child Component inside same file
  function ServiceCard({ service }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-lg border-0">
          <div className="card-body">
            <h5 className="card-title text-primary fw-bold">
              {service.serviceName}
            </h5>
            <p className="card-text text-muted">
              Price: <strong>₹{service.price}</strong>
            </p>
            <h6 className="mt-3">Available Fabrics:</h6>
            <ul className="list-unstyled">
              {service.fabricsAvailable.map((fabric, index) => (
                <li key={index}> {fabric}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Parent Component Data
  const services = [
    {
      serviceName: "Shirts",
      price: 500,
      fabricsAvailable: ["Cotton", "Linen", "Silk"],
    },
    {
      serviceName: "Pants",
      price: 700,
      fabricsAvailable: ["Denim", "Cotton", "Linen"],
    },
    {
      serviceName: "Lehenga",
      price: 2500,
      fabricsAvailable: ["Silk", "Georgette", "Velvet"],
    },
    {
      serviceName: "Blouse",
      price: 800,
      fabricsAvailable: ["Cotton", "Silk", "Chiffon"],
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-5">10. TAILOR SERVICES</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default TailorShop;