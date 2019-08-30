class maze {
  constructor(n) {
    this.mazearr = new Array(n * n);
    this.visited = new Array(n * n);
    this.n = n;
    this.visited.fill(0);
    this.mazearr.fill(15);
    this.mazearr[0] = 11;
    this.mazearr[(n * n) - 1] = 14;
  }

  DFS2(node) {
    this.visited[node] = -1;
    let pos = this.getPosition(node, this.n);
    let arr = [1, 2, 3, 4];
    this.shuffleArray(arr);
    for(let i = 0; i < 4; i++) {
      if (arr[i] == 1) {
        if (pos != 0 && pos != 1 && pos != 2) {
          if (this.visited[node - this.n] != -1) { // if i visited this spot down
            this.mazearr[node] = this.breakTop(this.mazearr[node]);
            this.mazearr[node - this.n] = this.breakDown(this.mazearr[node - this.n]);
            this.DFS2(node - this.n);
          }
        }
      } else if (arr[i] == 2) {
        if (pos != 2 && pos != 3 && pos != 4) {
          if (this.visited[node + 1] != -1) {
            this.mazearr[node] = this.breakRight(this.mazearr[node]);
            this.mazearr[node + 1] = this.breakLeft(this.mazearr[node + 1]);
            this.DFS2(node + 1);
          }
        }
      } else if (arr[i] == 3) {
        if (pos != 4 && pos != 5 && pos != 6) {
          if (this.visited[node + this.n] != -1) {
            this.mazearr[node] = this.breakDown(this.mazearr[node]);
            this.mazearr[node + this.n] = this.breakTop(this.mazearr[node + this.n]);
            this.DFS2(node + this.n);
          }
        }
      } else if (arr[i] == 4) {
        if (pos != 6 && pos != 7 && pos != 0) {
          if (this.visited[node - 1] != -1) {
            this.mazearr[node] = this.breakLeft(this.mazearr[node]);
            this.mazearr[node - 1] = this.breakRight(this.mazearr[node - 1]);
            this.DFS2(node - 1);
          }
        }
      }
    }
  }

  BFS(node) {
    let right = [1, 3, 5, 7, 9, 11, 13, 15];
    let left = [4, 5, 6, 7, 12, 13, 14, 15];
    let top = [8, 9, 10, 11, 12, 13, 14, 15];
    let bottom = [2, 3, 6, 7, 10, 11, 14, 15];

    let colorarr = new Array(this.mazearr.length);
    let parentarr = new Array(this.mazearr.length);
    let stack = [];
    let copy = this.mazearr.slice();
    colorarr[0] = 'gray';
    parentarr[0] = 0;
    stack.push(node); // adds the starting node which should be coordinate (0,0)
    while(stack && stack.length) {
      var t = stack[0];
      var pos = getPosition(t, this.n);
      if (pos == 0 || pos == 1 || pos == 2) { //top is available
        if (!top.includes(this.mazearr[t]) && !colorarr[t - this.mazearr.n] == 'black') {
          color[t - this.mazearr.n] = 'gray';
          parentarr[t - this.mazearr.n] = t;
          stack.push(t - this.mazearr.n);
        }
      } else if (pos == 2 || pos == 3 || pos == 4) {
        if (!right.includes(this.mazearr[t]) && !colorarr[t + 1] == 'black') {
          color[t + 1] = 'gray';
          parentarr[t + 1] = t;
          stack.push(t + 1);
        }
      } else if (pos == 4 || pos == 5 || pos == 6) {
        if (!bottom.includes(this.mazearr[t]) && !colorarr[t + this.mazearr.n] == 'black') {
          color[t + this.mazearr.n] = 'gray';
          parentarr[t + this.mazearr.n] = t;
          stack.push(t + this.mazearr.n);
        }
      } else if (pos == 6 || pos == 7 || pos == 0) {
        if (!left.includes(this.mazearr[t]) && !colorarr[t - 1] == 'black') {
          color[t - 1] = 'gray';
          parentarr[t - 1] = t;
          stack.push(t - 1);
        }
      }
      colorarr[t] = 'black';
      stack.shift();
    }
    return parentarr;
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  breakTop(n) {
    return n - 8;
  }

  breakRight(n) {
    return n - 1;
  }

  breakLeft(n) {
    return n - 4;
  }

  breakDown(n) {
    return n - 2;
  }

  getPosition(x, size) {
    if (x == 0) return 0; // top left
    if (x != 0 && x < size - 1) return 1; // top
    if (x == size - 1) return 2; // top right
    if (x != size - 1 && x != (size * size) - 1 && (x + 1) % size == 0) return 3; // right
    if (x == (size * size) - 1) return 4; // bottom right
    if (x < (size * size) - 1 && x > (size * size) - size) return 5; // bottom
    if (x == (size * size) - size) return 6; // bottom left
    if (x != (size * size) - size && x != 0 && x % size == 0) return 7; // left
    return 8;
  }

  convertCheck (array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 15) {
        array[i] = 'f';
      } else if (array[i] == 14) {
        array[i] = 'e';
      } else if (array[i] == 13) {
        array[i] = 'd';
      } else if (array[i] == 12) {
        array[i] = 'c';
      } else if (array[i] == 11) {
        array[i] = 'b';
      } else if (array[i] == 10) {
        array[i] = 'a';
      }
    }
  }


}
