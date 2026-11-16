
import Image from "next/image";

const galleryImages = [
  {
    image: "/Tree Plantation.png",
    title: "Tree Plantation",
    category: "Environment",
  },
  {
    image: "/Blood Donation.png",
    title: "Blood Donation",
    category: "Healthcare",
  },
  {
    image: "/Community Cleaning.png",
    title: "Community Cleaning",
    category: "Social Work",
  },
  {
    image: "/Food Distribution.png",
    title: "Food Distribution",
    category: "Charity",
  },
  {
    image: "/Volunteers Activites.png",
    title: "Volunteer Activities",
    category: "Community",
  },
  {
    image: "/Helping Children.png",
    title: "Helping Children",
    category: "Education",
  },
];

const Gallery = () => {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Our Memories
          </p>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Moments That Make a Difference
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A glimpse of our community coming together to create positive
            change and make the world a better place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={item.title}
              className="group relative h-64 overflow-hidden rounded-2xl sm:h-72"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
