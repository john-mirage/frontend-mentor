namespace AppData {

  interface UserPicture {
    png: string;
    webp: string;
  }
  
  interface User {
    image: UserPicture;
    username: string;
  }
  
  interface Reply {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo: string;
  }
  
  interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Reply[];
  }

  interface Message {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo?: string;
    replies?: Reply[];
  }

}