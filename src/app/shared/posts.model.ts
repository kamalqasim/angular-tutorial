export class PostsModel {
  constructor(public name: string, public content: string, public imagePath: string) {
    this.name = name;
    this.content = content;
    this.imagePath = imagePath;
  }
}
