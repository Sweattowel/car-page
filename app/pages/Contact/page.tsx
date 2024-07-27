import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const socialMedia = [
  {
    title: "Facebook", 
    source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcP0ZcWRME2hXax1sPPgNtutzs7H0ZQv2vw&s"
  },
  {
    title: "Instagram", 
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
  },
  {
    title: "LinkedIn", 
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
  }
]
const contactRoutes = [
  {
    routeMethod: "Email", 
    route: "CarPageEmail@testRoute.com.au"
  },
  {
    routeMethod: "Phone", 
    route: "0412 345 678"
  }
]
export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <section 
          className="w-[90vw] h-[70vh] flex flex-col justify-evenly items-center"
        > 
        <div className="w-full h-[25vh] flex flex-col justify-evenly items-center">
          <h2 
            className="font-bold text-xl"
          >
            Our Social media accounts
          </h2>          
          {socialMedia.map((media: any, index: number) => (
            <div
              className="flex m-auto min-w-[25%]"
              key={index}
            >
              <img className="w-[3rem]" src={media.source} alt={media.title}/>
              <h3
                className="text-center font-bold flex items-center justify-center w-full"
              >
                {media.title}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <h2
            className="font-bold text-xl"
          >
            Reach our customer support
          </h2>
          <div
            className="flex flex-col justify-evenly h-[15vh]"
          >
            {contactRoutes.map((route: any, index: number) => (
              <p
                className=""
                key={index}
              >
                {route.routeMethod} : {route.route}
              </p>
            ))}
          </div>
        </div>

        </section>
      </div>
      <Footer />
    </main>
  );
}
