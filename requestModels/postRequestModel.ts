class PostRequestModel {
  title: string;
  body: string;
  userId: number;

  constructor(title: string, body: string, userId: number) {
    this.title = title;
    this.body = body;
    this.userId = userId;
  }

  toJSON() {
    return {
      title: this.title,
      body: this.body,
      userId: this.userId,
    };
  }
}

export default PostRequestModel;
//vm
//post req , generic post request
//interface convert in class models req, res, send that to api call
//showing popup on errors - 404,400,500
//redux in view model - check
//internet connection
