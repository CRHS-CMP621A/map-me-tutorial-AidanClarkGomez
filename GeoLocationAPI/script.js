navigator.geolocation.getCurrentPosition(
    function(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const coords = [latitude, longitude]
        console.log(latitude, longitude)

        var map = L.map('map').setView(coords, 13)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

        L.marker(coords).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').setPopupContent('Workout').openPopup();

        console.log(`https://www.google.com/maps/@${latitude,longitude},15z`)
        map.on('click', function(mapEvent) {
            console.log(mapEvent)
            const lat= mapEvent.latlng.lat
            const lng= mapEvent.latlng.lng
            L.marker([lat, lng]).addTo(map)
            .bindPopup(L.popup({
                maxWidth:250,
                minWidth:100,
                autoClose:false,
                closeOnClick:false,
                className:'running-popup',
            }))
            .setPopupContent('Workout')
            .openPopup();

        })
    },
    function(){
        alert("Could not get position.")
    }
)

