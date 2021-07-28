class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
        images: "http://localhost:8080/api/cats/images/"
    }
}

class ProductionGlobabls extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
        images: "http://localhost:8080/api/cats/images/"
    }
}



const globals = process.env.NODE_ENV === "production" ? new ProductionGlobabls(): new DevelopmentGlobals();

export default globals;

