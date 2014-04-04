![Drawing on the Desk](./images/d1_outline.jpg)

##Mental Models

- Problem First Approach:
  - Programs are solutions to Problems

##How Computers Work

- Dictionary-analogy of Memory
- Circuits
- They compute code quickly, but not instantly
  - the laws of physics do apply
- Trade-Offs (There's no such thing as a free lunch)
  - For example: the more stuff in a list, the longer it may take to find something

DEMO:

- Flowchart a small task (i.e. drawing a square on the board)

- Use flowchart to write (pseudo)code of the program

- "evaluate" the program line-by-line. (i.e. role-play the computer)

###draw_square_on_board.program
```
  if (I.haveMarker?)

  else
    bucket.find
    bucket.remove(marker)
  end

  bucket.add marker

  if (bucket.markers is 2) 
    bucket.empty
  end
```