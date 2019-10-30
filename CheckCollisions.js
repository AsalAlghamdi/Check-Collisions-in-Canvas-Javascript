// obj1W, obj1H, obj2W, and obj2H is Object's width and height
function checkCollisions(obj1X, obj1Y, obj1W, obj1H, obj2X, obj2Y, obj2W, obj2H) {
    /*
     * If your objects (PNG Images probably) have empty spaces around the object graphics that 
     * will couse collision without seeing any friction, like this:
     * 
     *   A_______________B   <-|
     *   |               |     | empty space
     *   |      ____     |   <-| 
     *   |     | ^_^|    |
     *   |    0|    |0   |
     *   |    ||____||   |
     *   |      _| |_    |
     *   |               |   <-|
     *   |_______________|     | empty space
     *   C               D   <-|
     * 
     * you could solve this by using the code below to minimize the width and height (crop the image)
     * */
    /* 
    // Minimize the edges of the objects
    // it is your choice to determine the minTop, minBottom numbers
    const minTop = 3; 
    const minBottom = 15;
    // Object 1 Corner Points
    const pointA = [obj1X + minTop, obj1Y + minTop];
    const pointB = [obj1X + obj1W - minTop, obj1Y + minTop];
    const pointC = [obj1X + minTop, obj1Y + obj1H - minBottom];
    const pointD = [obj1X + obj1W - minTop, obj1Y - minBottom + obj1H];

    // Object 2 Corner Points
    const pointE = [obj2X , obj2Y ];
    const pointF = [obj2X + obj2W , obj2Y ];
    const pointG = [obj2X , obj2Y + obj2H ];
    const pointH = [obj2X + obj2W, obj2Y  + obj2H]; */

    // Player Corner Points
    const pointA = [obj1X, obj1Y];
    const pointB = [obj1X + obj1W, obj1Y];
    const pointC = [obj1X, obj1Y + obj1H];
    const pointD = [obj1X + obj1W, obj1Y + obj1H];

    // Enemy Corner Points
    const pointE = [obj2X , obj2Y ];
    const pointF = [obj2X + obj2W , obj2Y ];
    const pointG = [obj2X , obj2Y + obj2H ];
    const pointH = [obj2X + obj2W, obj2Y  + obj2H];

    /*
    * Now check each point if its position (x,y) found in the other object.
    * CASE #1
    * if A(x) is between E(x)-F(x) AND A(y) between E(y)-G(y)

    E__________F
    |          |
    |    (A)___|____B
    |     |    |    |
    |_____|____|    |
    G     |    H    |
          |_________|
          C         D
    */
    if ((pointE[0] <= pointA[0] && pointF[0] >= pointA[0]) && (pointE[1] <= pointA[1] && pointG[1] >= pointA[1])) {
        return true;
    }
    /* 
    * CASE #2
    * if B(x) is between E(x)-F(x) AND B(y) between E(y)-G(y)

         E__________F
         |          |
    A____|____(B)   |
    |    |     |    |
    |    |_____|____|
    |    G     |    H
    |_____ ____|    
    C          D    
    */
    if ((pointE[0] <= pointB[0] && pointF[0] >= pointB[0]) && (pointE[1] <= pointB[1] && pointG[1] >= pointB[1])) {
        return true;
    }
    /* 
    * CASE #3
    * if C(x) is between E(x)-F(x) AND C(y) between E(y)-G(y)

         A__________B
         |          |
    E____|_____F    |
    |    |     |    |
    |    |_____|____|
    |   (C)    |    D
    |_____ ____|    
    G          H    

    */
    if ((pointE[0] <= pointC[0] && pointF[0] >= pointC[0]) && (pointE[1] <= pointC[1] && pointG[1] >= pointC[1])) {
        return true;
    }
    /*
    * CASE #4
    * if D(x) is between E(x)-F(x) AND D(y) between E(y)-G(y)

    A__________B
    |          |
    |     E____|____F
    |     |    |    |
    |_____|____|    |
    C     |   (D)   |
          |_________|
          D         H
    */
    if ((pointE[0] <= pointD[0] && pointF[0] >= pointD[0]) && (pointE[1] <= pointD[1] && pointG[1] >= pointD[1])) {
        return true;
    }
    /* 
    * CASE #5
    * if E(x) is between A(x)-B(x) AND E(y) between A(y)-B(y)

    A__________B
    |          |
    |    (E)___|____F
    |     |    |    |
    |_____|____|    |
    C     |    D    |
          |_________|
          G         H

    */
    if ((pointA[0] <= pointE[0] && pointB[0] >= pointE[0]) && (pointA[1] <= pointE[1] && pointC[1] >= pointE[1])) {
        return true;
    }
    /* 
    * CASE #6
    * if F(x) is between A(x)-B(x) AND F(y) between A(y)-B(y)

         A__________B
         |          |
    E____|____(F)   |
    |    |     |    |
    |    |_____|____|
    |    C     |    D
    |_____ ____|    
    G          H    
    */
    if ((pointA[0] <= pointF[0] && pointB[0] >= pointF[0]) && (pointA[1] <= pointF[1] && pointC[1] >= pointF[1])) {
        return true;
    }
    /* 
    * CASE #7
    * if G(x) is between A(x)-B(x) AND G(y) between A(y)-B(y)

         E__________F
         |          |
    A____|_____B    |
    |    |     |    |
    |    |_____|____|
    |   (G)    |    H
    |__________|    
    C          D   
    */
    if ((pointA[0] <= pointG[0] && pointB[0] >= pointG[0]) && (pointA[1] <= pointG[1] && pointC[1] >= pointG[1])) {
        return true;
    }
    /*
    * CASE #8
    * if H(x) is between A(x)-B(x) AND H(y) between A(y)-B(y)

    E__________F
    |          |
    |     A____|____B
    |     |    |    |
    |_____|____|    |
    G     |   (H)   |
          |_________|
          C         D
    */
    if ((pointA[0] <= pointH[0] && pointB[0] >= pointH[0]) && (pointA[1] <= pointH[1] && pointC[1] >= pointH[1])) {
        return true;
    }
    return false;
}
