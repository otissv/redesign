export interface ScrollbarInterface {
  width: string;
  height: string;
  backgroundColor: string;

  corner: {
    backgroundColor: string;
  };

  thumb: {
    backgroundColor: string;
    outline: string;
    transition: string;
    hover: {
      backgroundColor: string;
    };
  };
}

export interface PartialScrollbarInterface
  extends Partial<ScrollbarInterface> {}
