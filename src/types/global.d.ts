declare global {
    interface Window {
      Twitch?: {
        Embed: new (
          id: string,
          options: {
            width: number;
            height: number;
            channel: string;
            parent: string[];
          }
        ) => void;
      };
    }
  }
  
  export {};
  