var diary = {
	"entry": [{
		"date": "13.08.2017",
		"location": "Schliersee, Bavaria, Germany",
		"title": "Arriving in Germany",
		"coverimage": "",
		"text": "",
		"images_landscape": [],
		"images_portrait": []
	}]
}

function asign(HTML_str,data) {
	var HTML_new = HTML_str.replace('%data%', data);
	return HTML_new
};


function displayDiary(entries) {
var index = -1;
for (entry in entries) {
	index = index +1;
	$('#diary').append(HTMLdiaryStart);
	var formattedImage = asign(HTMLdiaryImage,diary.entry[entry].coverimage);
	var formattedTitle = asign(HTMLdiaryTitle,diary.entry[entry].title);
	var formattedMap = HTMLdiaryMap(index);
	var combined = formattedImage+formattedTitle+formattedMap;
	$('.diary-entry:last').append(asign(HTMLdiaryDate,diary.entry[entry].date));
	$('.diary-entry:last').append(combined);

	//mapLocation = diary.entry[index].location;
	//console.log(mapLocation);
	//initializeMap(index,diary.entry[index].location);

	$('.diary-entry:last').append(asign(HTMLdiaryText,diary.entry[entry].text));
	var galleryCombined = HTMLgalleryStart(index);
	for (image in diary.entry[entry].images_landscape) {
			galleryCombined = galleryCombined + asign(HTMLgalleryImageLS,diary.entry[entry].images_landscape[image]);
		}
	for (image in diary.entry[entry].images_portrait) {
		galleryCombined = galleryCombined + asign(HTMLgalleryImagePT,diary.entry[entry].images_portrait[image]);
	}

	$('.diary-entry:last').append(galleryCombined);
	gallery_maker(index);
	var galleryCombined = "";
	}
} 
displayDiary(diary.entry);

