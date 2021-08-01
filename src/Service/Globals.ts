class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/", //This is public for all
        images: "http://localhost:8080/api/cats/images/",
        client: "http://localhost:8080/api/client/",
        customers: "http://localhost:8080/api/customers/cats", // this is secured one
    }
}

class ProductionGlobabls extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
        images: "http://localhost:8080/api/cats/images/",
        client: "http://localhost:8080/api/client/",
        customers: "http://localhost:8080/api/customers/cats", // this is secured one

    }
}



const globals = process.env.NODE_ENV === "production" ? new ProductionGlobabls(): new DevelopmentGlobals();

export default globals;

