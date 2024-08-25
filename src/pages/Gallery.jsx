/* src/components/Gallery.jsx */

import '../assets/css/Gallery.css';

const Gallery = () => {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../assets/images/gallery/smart-apartment-complex.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../assets/images/gallery/parking.jpg',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../assets/images/gallery/visit.jpg',
    },
   
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="gallery-items">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
