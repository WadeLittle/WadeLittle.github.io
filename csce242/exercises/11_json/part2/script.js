const getBreweries = async () => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const showBrewery = async () => {
    const breweries = await getBreweries();

    breweries.forEach(brewery => {
        document.getElementById("breweries-section").append(getBreweriesSection(brewery));
    });

}

const getBreweriesSection = (brewery) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name;
    section.append(h3);

    const latitude = brewery.latitude;
    const longitude = brewery.longitude;

    const mapDiv = document.createElement("div");
    mapDiv.style.width="100%";
    section.append(mapDiv);

    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "600";
    iframe.style.frameborder = "0";
    iframe.style.scrolling = "no";
    iframe.style.marginwidth = "0";
    iframe.style.marginheight = "0";
    iframe.src = `https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${latitude},%20${longitude}+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

    const a = document.createElement("a");
    a.href = "https://www.gps.ie/";
    a.innerHTML = "gps systems";
    mapDiv.append(iframe);
    iframe.append(a);

    return section;
}

showBrewery();