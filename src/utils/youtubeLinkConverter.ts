export default function convertYoutubeLink(link: string | undefined): string | undefined {
  const regex = /https:\/\/www\.youtube\.com\/watch\?v=(.+)/;
  const match = link?.match(regex);

  if (match) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    alert('Invalid YouTube video link');
  }
}
