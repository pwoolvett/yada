let cards = document.getElementById("cards");

function makeCard(cardTitle, supportingTxt, link, linkText) {
  //Card
  let nuCard = document.createElement("DIV");
  nuCard.className = "demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop";

  //Card.div(title)
  let nuTitleDiv = document.createElement("DIV");
  nuTitleDiv.className = "mdl-card__title mdl-card--expand mdl-color--teal-300";

  //Card.div(title).text
  let nuTitleH = document.createElement("H2");
  nuTitleH.className = "mdl-card__title-text";
  nuTitleH.innerHTML = cardTitle;

  //Card.div(supporting text)
  let nuSupportingTxtDiv = document.createElement("DIV");
  nuSupportingTxtDiv.className = "mdl-card__supporting-text mdl-color-text--grey-600";
  nuSupportingTxtDiv.innerHTML = supportingTxt;

  //Card.div(open link)
  let nuOpenLinkDiv = document.createElement("DIV");
  nuOpenLinkDiv.className = "mdl-card__actions mdl-card--border";

  //Card.div(open link).a(link)
  let nuOpenLinkA = document.createElement("A");
  nuOpenLinkA.className = "mdl-button mdl-js-button mdl-js-ripple-effect";
  nuOpenLinkA.href = link;
  nuOpenLinkA.innerHTML = linkText;


  nuCard.appendChild(nuTitleDiv);
  nuCard.appendChild(nuSupportingTxtDiv);
  nuCard.appendChild(nuOpenLinkDiv);

  nuTitleDiv.appendChild(nuTitleH);
  nuOpenLinkDiv.appendChild(nuOpenLinkA);

  return nuCard
}

function addPage() {
  let card = makeCard("SampleExample", "This is supporting text example", "https://www.google.com", "Google!");
  cards.appendChild(card);
}