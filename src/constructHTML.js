const makeCards = (objectArray) => {
  cards = '';

  objectArray.forEach(element => {
    cards += `
    <div class="card col-3 m-2">
    <div class=" card-body">
    ${element.getName()}
    ${element.getRole()}
    ${element.getID()}
    `;
    if (element.role === 'Engineer') {
      cards += `
      <p>GitHub: ${element.getGithub()}</p>
    `;
    } else if (element.role === 'Intern') {
      cards += `
      ${element.getSchool()}

    `;
    } else {
      cards += `
            ${element.getOffice()}

    `;
    };
    cards += `
    <p> Email: ${element.getEmail()}</p>
    </div>
    </div>
    `;
  });


  return cards;
};

module.exports = constructHTML = (array) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Roster</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    </head>

    <body>
      <header class='p-3 bg-info'>
        <h1>The Team</h1>
      </header>
      <main>
      <div class="container">
          <div class="row">

          ${makeCards(array)}

          </div>
        </div>
      </main>
    </body>
    </html>
    `;
};