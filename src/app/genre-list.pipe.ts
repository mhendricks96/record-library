import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'genreList',
  // dont really need right now because it defaults to true. currently is stateless
  pure: true,
})
export class GenresListPipe implements PipeTransform {
  transform(mediaItems: any[]) {
    const genres: string[] = [];
    mediaItems.forEach((mediaItem: { genre: string; }) => {
      if (genres.indexOf(mediaItem.genre) <= -1) {
        genres.push(mediaItem.genre);
      }
    });
    // return genres.join('  |  ');
    return genres
  }
}