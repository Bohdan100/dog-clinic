const petCardTemplate = ({
  name,
  img,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites,
}) => {
  return `<img class="modal-image" src="${img}" alt="${name}"/>
        <div class="modal-content">
            <h2 class="title">${name}</h2>
            <h3 class="subtitle">${type}</h3>
            <p class="text">${description}</p>
            <ul class="list info">
                <li class="info__item">Age: ${age};</li>
                <li class="info__item">Inoculations: ${inoculations};</li>
                <li class="info__item">Diseases: ${diseases};</li>
                <li class="info__item">Parasites: ${parasites}.</li>
              </ul>
          </div>
        `;
};

export default petCardTemplate;
