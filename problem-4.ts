{
  // // Sample Input 1:
  // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  // // Sample Output 1:
  // 78.54;

  // // Sample Input 2:
  // const rectangleArea = calculateShapeArea({
  //   shape: "rectangle",
  //   width: 4,
  //   height: 6,
  // });

  // // Sample Output 2:
  // 24;

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  function calculateShapeArea(shape: Circle | Rectangle): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      throw new Error("Unknown shape type");
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);
}
