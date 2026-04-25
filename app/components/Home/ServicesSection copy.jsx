import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  { img: service1, title: "Organic Farm Solutions" },
  { img: service2, title: "The Eco-Friendly Farming" },
  { img: service3, title: "Organic Produce Supply" },
  { img: service4, title: "Agri-Technology Innovations" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Agro Excellence</p>
          <h2 className="section-title text-foreground">Building a Greener Farming</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((service, i) => (
            <div key={i} className="card-service">
              <img
                src="images/service-1.jpg"
                alt={service.title}
                loading="lazy"
                width={640}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg font-bold text-white mb-2">{service.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#8ACB1A] font-body text-sm font-semibold hover:gap-2 transition-all"
                >
                  Read More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
