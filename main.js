const data = [
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
  {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
    {
    "title": "RejectSuperLoan",
    "source": "rejectsuperloan.json"
  },
]

function foo() {
  const root = document.querySelector('.root');

  for (let i = 0; i < data.length; i++) {
    const cell = document.createElement('div');

    cell.innerHTML += (`
    <lottie-player src="${data[i].source}" background="transparent" speed="1" style="width: 300px; height: 300px"
    direction="1" mode="normal" loop controls autoplay></lottie-player>
    <span class="title">${data[i].title}</span>`)

    root.append(cell);
  }

}