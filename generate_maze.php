<?php if (isset($_POST['generate'])) { ?>
<script>
var json = <?php echo json_encode($_POST['maze_size']) ?>;
var data = JSON.parse(json);
var tempMaze = new maze(data);
tempMaze.DFS2(0);
tempMaze.convertCheck(tempMaze.mazearr);
for (let i = 0; i < tempMaze.mazearr.length; i++) {
  //document.write(tempMaze.mazearr[i]);
}

var table = document.getElementById('maze_pic');


for (let i = 0; i < tempMaze.n; i++) {
  let row = document.createElement('tr');
  table.append(row);
  for (let j = 0; j < tempMaze.n; j++) {
    var cell = document.createElement('td');
    //var maze_slot = document.createElement('span');
    //maze_slot.textContent = tempMaze.mazearr[(i * tempMaze.n) + j];
    //document.write(tempMaze.mazearr[(i * tempMaze.n) + j]);
    cell.innerHTML = tempMaze.mazearr[(i * tempMaze.n) + j];
    if (tempMaze.mazearr[(i * tempMaze.n) + j] == 0) {
      cell.classList.add('empty-block');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 1) {
      cell.classList.add('right-only');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 2) {
      cell.classList.add('down-only');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 3) {
      cell.classList.add('rd');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 4) {
      cell.classList.add('left-only');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 5) {
      cell.classList.add('lr');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 6) {
      cell.classList.add('dl');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 7) {
      cell.classList.add('rdl');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 8) {
      cell.classList.add('top-only');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 9) {
      cell.classList.add('rt');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'a') {
      cell.classList.add('dt');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'b') {
      cell.classList.add('rdt');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'c') {
      cell.classList.add('tl');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'd') {
      cell.classList.add('rtl');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'e') {
      cell.classList.add('dlt');
    } else if (tempMaze.mazearr[(i * tempMaze.n) + j] == 'f') {
      cell.classList.add('full');
    }
    //cell.append(maze_slot);
    row.append(cell);
  }
}


</script>
<?php }?>
