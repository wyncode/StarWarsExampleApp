$.ajax({
    url: "https://swapi.co/api/people",
    dataType: 'json'
}).done((result) => {
  const peopleArray = result.results;
  peopleArray.forEach( ( person ) => {
    $('#character').append(
    `<option value="${person.name}">${person.name}</option>`
    );
  });

  $('#sw-form').submit( (event) => {
    event.preventDefault();
    $('.results').empty();
    const character_name = $('#character').val();
    for(let i=0; i < peopleArray.length; i++) {
      if(peopleArray[i].name == character_name) {
        let person = peopleArray[i];
        for( item in person ){
          let key = item;
          let val = person[item];
          let keyAry = ['homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url']
          if( keyAry.indexOf(key) === -1) {
            $('.results').append(
              `<dl>
                <dt>${ key }</dt>
                <dd>${ val }</dd>
              </dl>`
            );
          }
        }
      }
    }
  });
});