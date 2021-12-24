function contactPage() {
  let content = document.getElementById("content");

  let contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  map(contact);
  let siteInfo = document.createElement("div");
  siteInfo.setAttribute("id", "site-info");
  location(siteInfo);
  hours(siteInfo);
  contactInfo(siteInfo);
  contact.appendChild(siteInfo);

  content.appendChild(contact);
}

function map(contact) {
  let map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13499.201594887732!2d-110.9428758!3d32.2365405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfdf75f501ab267!2sBerry%20Divine%20Acai%20Bowls!5e0!3m2!1sen!2sus!4v1640251110948!5m2!1sen!2sus"
  );
  map.setAttribute("loading", "lazy");
  contact.appendChild(map);
}

function location(siteInfo) {
  let location = document.createElement("div");
  location.setAttribute("id", "location");

  let title = document.createElement("h1");
  title.textContent = "Location";
  location.appendChild(title);

  let address1 = document.createElement("p");
  address1.textContent = "1927 E Speedway Blvd Suite 109";
  location.appendChild(address1);

  let address2 = document.createElement("p");
  address2.textContent = "Tucson, AZ 85719";
  location.appendChild(address2);

  siteInfo.appendChild(location);
}

function hours(siteInfo) {
  let hours = document.createElement("div");
  hours.setAttribute("id", "hours");

  let title = document.createElement("h1");
  title.textContent = "Hours";
  hours.appendChild(title);

  let dates1 = document.createElement("p");
  dates1.textContent = "Monday - Thursday | 8:00AM - 9:00PM";
  hours.appendChild(dates1);

  let dates2 = document.createElement("p");
  dates2.textContent = "Friday - Sunday | 7:30AM - 10:00PM";
  hours.appendChild(dates2);

  siteInfo.appendChild(hours);
}

function contactInfo(siteInfo) {
  let contact = document.createElement("div");
  contact.setAttribute("id", "contact-info");

  let title = document.createElement("h1");
  title.textContent = "Contact Us";
  contact.appendChild(title);

  let email = document.createElement("p");
  email.textContent = "Email | acaibowls@gmail.com";
  contact.appendChild(email);

  let phone = document.createElement("p");
  phone.textContent = "Phone | 520-000-0000";
  contact.appendChild(phone);

  siteInfo.appendChild(contact);
}

export { contactPage };
