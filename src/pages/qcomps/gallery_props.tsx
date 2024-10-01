type GalleryItemProps = {
  name: string;
  imageUrl: string;
  profession: string;
  awards: string[];
  discovery: string;
};

const galleryItems: GalleryItemProps[] = [
  {
    name: "Maria Skłodowska-Curie",
    imageUrl: "https://i.imgur.com/szV5sdGs.jpg",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovery: "polonium (element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageUrl: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovery: "a method for measuring carbon dioxide in seawater",
  },
];

function GalleryItem(item: GalleryItemProps) {
  return (
    <section className="profile">
      <h2>{item.name}</h2>
      <img
        className="avatar"
        src={item.imageUrl}
        alt={item.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {item.profession}
        </li>
        <li>
          <b>Awards: {item.awards.length} </b>({item.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {item.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function GalleryProps() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {galleryItems.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
}
