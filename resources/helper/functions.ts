import { trackI } from "resources/interface/trackInterface";

export const totalTrackTime = (tracks: any) => {
    return tracks.map(({ duration_ms }: any) => {
		return duration_ms;
	})
	.reduce((a: number, b: number) => a + b, 0);
}

export const msToTime = (duration: number) => {
	let seconds: number | string = Math.floor((duration / 1000) % 60),
		minutes: number | string = Math.floor((duration / (1000 * 60)) % 60),
		hours: number | string = Math.floor((duration / (1000 * 60 * 60)) % 24);

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
};

export const handleTrackUpload = (item: any,album:any) => {
    const payload: trackI = {
			audioUrl: item.preview_url,
			image: album[0].images[2].url,
			name: album[0].artists[0].name,
			title: item.name,
			trackId:item.id
    };
    
    return {...payload}
}