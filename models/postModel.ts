class PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor({
    userId,
    id,
    title,
    body,
  }: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }) {
    this.id = id;
    this.userId = userId;
    this.body = body;
    this.title = title;
  }
  static fromJson(json: any): PostModel {
    return new PostModel({
      id: json['id'],
      userId: json['userId'],
      title: json['title'],
      body: json['body'],
    });
  }
}

export default PostModel;
