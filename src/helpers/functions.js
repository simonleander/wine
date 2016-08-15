export const getTimestamp = () => {

	const date = new Date();
    const timestamp = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +  date.getHours() + ":" + date.getMinutes();

    return timestamp;

}