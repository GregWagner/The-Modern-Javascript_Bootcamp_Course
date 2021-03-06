const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]



const getScoreLine = ({
  homeTeam,
  awayTeam
}) => {
  const {
    team: hTeam,
    points: hPoints
  } = homeTeam;
  const {
    team: aTeam,
    points: aPoints
  } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if (hPoints > aPoints) {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`
  } else {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`
  }
  return `${teamNames} ${scoreLine}`;
}

const isWinner = ({
  homeTeam,
  awayTeam
}, targetTeam) => {
  const target = homeTeam === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const gameLi = document.createElement('li');
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    gameLi.innerHTML = getScoreLine(game);
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const warriorsSection = document.querySelector('#gs');
const chart1 = makeChart(warriorsGames, 'Golden State');
warriorsSection.appendChild(chart1);

const rocketsSection = document.querySelector('#hr');
const chart2 = makeChart(warriorsGames, 'Houston');
rocketsSection.appendChild(chart2);