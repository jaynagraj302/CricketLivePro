// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const countdownDays = document.getElementById('days');
const countdownHours = document.getElementById('hours');
const countdownMinutes = document.getElementById('minutes');
const countdownSeconds = document.getElementById('seconds');
const nextMatchTeams = document.getElementById('nextMatchTeams');
const nextMatchTime = document.getElementById('nextMatchTime');
const nextMatchVenue = document.getElementById('nextMatchVenue');
const matchesContainer = document.getElementById('matchesContainer');
const highlightMatchContainer = document.getElementById('highlightMatchContainer');
const modal = document.getElementById('matchModal');
const teamModal = document.getElementById('teamModal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const modalBody = document.querySelector('.modal-body');
const teamModalBody = document.getElementById('teamModalBody');
const pointsTableBody = document.getElementById('pointsTableBody');
const teamsGrid = document.getElementById('teamsGrid');
const statsTabs = document.querySelectorAll('.stats-tabs button');
const statsContainer = document.getElementById('statsContainer');

// Sample Data
const teams = [
    { id: 1, name: 'Mumbai Indians', shortName: 'MI', logo: 'https://i.imgur.com/R1m23jr.jpeg', captain: 'Rohit Sharma', coach: 'Mahela Jayawardene', homeGround: 'Wankhede Stadium', matches: 5, wins: 4, losses: 1, noResult: 0, points: 8, nrr: 0.8 },
    { id: 2, name: 'Chennai Super Kings', shortName: 'CSK', logo: 'https://i.imgur.com/LsT0VWz.jpeg', captain: 'MS Dhoni', coach: 'Stephen Fleming', homeGround: 'MA Chidambaram Stadium', matches: 5, wins: 3, losses: 2, noResult: 0, points: 6, nrr: 0.5 },
    { id: 3, name: 'Royal Challengers Bangalore', shortName: 'RCB', logo: 'https://i.imgur.com/e51T5so.jpeg', captain: 'Virat Kohli', coach: 'Sanjay Bangar', homeGround: 'M. Chinnaswamy Stadium', matches: 5, wins: 3, losses: 2, noResult: 0, points: 6, nrr: 0.3 },
    { id: 4, name: 'Delhi Capitals', shortName: 'DC', logo: 'https://i.imgur.com/B53ByLk.jpeg', captain: 'Rishabh Pant', coach: 'Ricky Ponting', homeGround: 'Arun Jaitley Stadium', matches: 5, wins: 2, losses: 3, noResult: 0, points: 4, nrr: -0.2 },
    { id: 5, name: 'Kolkata Knight Riders', shortName: 'KKR', logo: 'https://i.imgur.com/vh6Kf1N.jpeg', captain: 'Shreyas Iyer', coach: 'Brendon McCullum', homeGround: 'Eden Gardens', matches: 5, wins: 2, losses: 3, noResult: 0, points: 4, nrr: -0.4 },
    { id: 6, name: 'Punjab Kings', shortName: 'PBKS', logo: 'https://i.imgur.com/BwTipSE.jpeg', captain: 'KL Rahul', coach: 'Anil Kumble', homeGround: 'PCA Stadium', matches: 5, wins: 1, losses: 4, noResult: 0, points: 2, nrr: -0.6 },
    { id: 7, name: 'Rajasthan Royals', shortName: 'RR', logo: 'https://i.imgur.com/wiUl1x1.jpeg', captain: 'Sanju Samson', coach: 'Kumar Sangakkara', homeGround: 'Sawai Mansingh Stadium', matches: 5, wins: 1, losses: 4, noResult: 0, points: 2, nrr: -0.8 },
    { id: 8, name: 'Sunrisers Hyderabad', shortName: 'SRH', logo: 'https://i.imgur.com/CyxeuGq.jpeg', captain: 'Kane Williamson', coach: 'Trevor Bayliss', homeGround: 'Rajiv Gandhi Stadium', matches: 5, wins: 1, losses: 4, noResult: 0, points: 2, nrr: -1.0 },
    { id: 9, name: 'Gujarat Titans', shortName: 'GT', logo: 'https://i.imgur.com/j2rnJko.jpeg', captain: 'Hardik Pandya', coach: 'Ashish Nehra', homeGround: 'Narendra Modi Stadium', matches: 5, wins: 3, losses: 2, noResult: 0, points: 6, nrr: 0.4 }
];

const matches = [
    { id: 1, team1: 'CSK', team2: 'MI', date: '2025-04-10', time: '19:30', venue: 'Wankhede Stadium, Mumbai', status: 'upcoming', team1Score: '', team2Score: '', result: '' },
    { id: 2, team1: 'RCB', team2: 'KKR', date: '2025-04-11', time: '15:30', venue: 'Eden Gardens, Kolkata', status: 'upcoming', team1Score: '', team2Score: '', result: '' },
    { id: 3, team1: 'DC', team2: 'PBKS', date: '2025-04-11', time: '19:30', venue: 'PCA Stadium, Mohali', status: 'upcoming', team1Score: '', team2Score: '', result: '' },
    { id: 4, team1: 'SRH', team2: 'RR', date: '2025-04-12', time: '19:30', venue: 'Sawai Mansingh Stadium, Jaipur', status: 'upcoming', team1Score: '', team2Score: '', result: '' },
    { id: 5, team1: 'MI', team2: 'RCB', date: '2025-04-09', time: '19:30', venue: 'M. Chinnaswamy Stadium, Bangalore', status: 'live', team1Score: '145/3 (15.2)', team2Score: '182/6 (20)', result: 'MI need 38 runs from 28 balls' },
    { id: 6, team1: 'KKR', team2: 'DC', date: '2025-04-08', time: '19:30', venue: 'Arun Jaitley Stadium, Delhi', status: 'completed', team1Score: '165/7 (20)', team2Score: '168/4 (18.3)', result: 'DC won by 6 wickets' },
    { id: 7, team1: 'PBKS', team2: 'CSK', date: '2025-04-07', time: '15:30', venue: 'MA Chidambaram Stadium, Chennai', status: 'completed', team1Score: '158/8 (20)', team2Score: '162/4 (18.5)', result: 'CSK won by 6 wickets' },
    { id: 8, team1: 'RR', team2: 'SRH', date: '2025-04-06', time: '19:30', venue: 'Rajiv Gandhi Stadium, Hyderabad', status: 'completed', team1Score: '175/6 (20)', team2Score: '176/3 (19.1)', result: 'SRH won by 7 wickets' },
    { id: 9, team1: 'GT', team2: 'RR', date: '2025-04-13', time: '19:30', venue: 'Narendra Modi Stadium, Ahmedabad', status: 'upcoming', team1Score: '', team2Score: '', result: '' },
    { id: 10, team1: 'GT', team2: 'CSK', date: '2025-04-14', time: '19:30', venue: 'MA Chidambaram Stadium, Chennai', status: 'upcoming', team1Score: '', team2Score: '', result: '' }
];

const news = [
    { id: 1, title: 'IPL 2025 to feature two new teams from Ahmedabad and Lucknow', excerpt: 'The BCCI has announced the inclusion of two new franchises for IPL 2025 season.', date: 'Apr 5, 2025', image: 'https://i.imgur.com/JbQZ0wM.png' },
    { id: 2, title: 'Virat Kohli returns to RCB as captain for IPL 2025', excerpt: 'After a one-year break, Kohli will lead RCB again in the upcoming season.', date: 'Apr 4, 2025', image: 'https://i.imgur.com/JbQZ0wM.png' },
    { id: 3, title: 'IPL 2025 schedule announced, tournament to begin on April 5', excerpt: 'The opening match will be between defending champions CSK and MI.', date: 'Apr 3, 2025', image: 'https://i.imgur.com/JbQZ0wM.png' },
    { id: 4, title: 'BCCI introduces new rules for IPL 2025 season', excerpt: 'New rules include an additional DRS review per innings and concussion substitutes.', date: 'Apr 2, 2025', image: 'https://i.imgur.com/JbQZ0wM.png' }
];

const battingStats = [
    { id: 1, player: 'Virat Kohli', team: 'RCB', matches: 5, runs: 325, avg: 81.25, sr: 145.3, hs: '98*', fours: 32, sixes: 12 },
    { id: 2, player: 'KL Rahul', team: 'PBKS', matches: 5, runs: 298, avg: 74.5, sr: 138.2, hs: '105', fours: 28, sixes: 10 },
    { id: 3, player: 'Shubman Gill', team: 'GT', matches: 5, runs: 290, avg: 72.5, sr: 140.5, hs: '96', fours: 26, sixes: 11 },
    { id: 4, player: 'Rohit Sharma', team: 'MI', matches: 5, runs: 265, avg: 66.25, sr: 140.1, hs: '92', fours: 30, sixes: 8 },
    { id: 5, player: 'David Warner', team: 'DC', matches: 5, runs: 248, avg: 62.0, sr: 136.5, hs: '85*', fours: 27, sixes: 7 }
];

const bowlingStats = [
    { id: 1, player: 'Jasprit Bumrah', team: 'MI', matches: 5, wickets: 12, avg: 15.2, econ: 6.8, best: '4/15' },
    { id: 2, player: 'Rashid Khan', team: 'GT', matches: 5, wickets: 11, avg: 16.8, econ: 6.5, best: '3/18' },
    { id: 3, player: 'Yuzvendra Chahal', team: 'RR', matches: 5, wickets: 9, avg: 20.1, econ: 7.5, best: '3/25' },
    { id: 4, player: 'Kagiso Rabada', team: 'DC', matches: 5, wickets: 8, avg: 22.3, econ: 8.1, best: '3/28' },
    { id: 5, player: 'Deepak Chahar', team: 'CSK', matches: 5, wickets: 7, avg: 24.6, econ: 7.8, best: '2/18' }
];

const fieldingStats = [
    { id: 1, player: 'Rishabh Pant', team: 'DC', matches: 5, catches: 8, stumpings: 3, runOuts: 2 },
    { id: 2, player: 'MS Dhoni', team: 'CSK', matches: 5, catches: 6, stumpings: 4, runOuts: 1 },
    { id: 3, player: 'Sanju Samson', team: 'RR', matches: 5, catches: 7, stumpings: 2, runOuts: 1 },
    { id: 4, player: 'Quinton de Kock', team: 'MI', matches: 5, catches: 5, stumpings: 0, runOuts: 1 },
    { id: 5, player: 'Hardik Pandya', team: 'GT', matches: 5, catches: 5, stumpings: 0, runOuts: 2 }
];

// Functions
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function toggleTheme() {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    
    // Save theme preference
    localStorage.setItem('theme', document.body.getAttribute('data-theme'));
}

function updateCountdown() {
    // Find the next upcoming match
    const now = new Date();
    const upcomingMatches = matches.filter(match => {
        const matchDate = new Date(`${match.date}T${match.time}:00`);
        return matchDate > now && match.status === 'upcoming';
    });
    
    if (upcomingMatches.length === 0) {
        // If no upcoming matches, show a message
        countdownDays.textContent = '00';
        countdownHours.textContent = '00';
        countdownMinutes.textContent = '00';
        countdownSeconds.textContent = '00';
        nextMatchTeams.textContent = 'No upcoming matches';
        nextMatchTime.textContent = '';
        nextMatchVenue.textContent = '';
        return;
    }
    
    // Sort by date to get the next match
    upcomingMatches.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}:00`);
        const dateB = new Date(`${b.date}T${b.time}:00`);
        return dateA - dateB;
    });
    
    const nextMatch = upcomingMatches[0];
    const nextMatchDate = new Date(`${nextMatch.date}T${nextMatch.time}:00`);
    const distance = nextMatchDate - now;
    
    // Update countdown display
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownDays.textContent = days.toString().padStart(2, '0');
    countdownHours.textContent = hours.toString().padStart(2, '0');
    countdownMinutes.textContent = minutes.toString().padStart(2, '0');
    countdownSeconds.textContent = seconds.toString().padStart(2, '0');
    
    // Update next match info
    const team1 = teams.find(t => t.shortName === nextMatch.team1);
    const team2 = teams.find(t => t.shortName === nextMatch.team2);
    
    nextMatchTeams.textContent = `${team1.shortName} vs ${team2.shortName}`;
    nextMatchTime.textContent = `${new Date(nextMatch.date).toDateString()}, ${nextMatch.time}`;
    nextMatchVenue.textContent = nextMatch.venue;
}

function renderHighlightMatch() {
    // Find today's matches
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    const todaysMatches = matches.filter(match => {
        const matchDate = match.date;
        return matchDate === todayStr;
    });
    
    if (todaysMatches.length === 0) {
        // If no matches today, find the next upcoming match
        const upcomingMatches = matches.filter(match => {
            const matchDate = new Date(`${match.date}T${match.time}:00`);
            return matchDate > today && match.status === 'upcoming';
        });
        
        if (upcomingMatches.length > 0) {
            upcomingMatches.sort((a, b) => {
                const dateA = new Date(`${a.date}T${a.time}:00`);
                const dateB = new Date(`${b.date}T${b.time}:00`);
                return dateA - dateB;
            });
            
            renderHighlightContent(upcomingMatches[0]);
        } else {
            highlightMatchContainer.innerHTML = '<p>No upcoming matches scheduled</p>';
        }
        return;
    }
    
    // If there are matches today, show the first one
    renderHighlightContent(todaysMatches[0]);
}

function renderHighlightContent(match) {
    const team1 = teams.find(t => t.shortName === match.team1);
    const team2 = teams.find(t => t.shortName === match.team2);
    
    const matchDate = new Date(`${match.date}T${match.time}:00`);
    const now = new Date();
    const timeUntilMatch = matchDate - now;
    
    let timerHTML = '';
    if (timeUntilMatch > 0 && match.status === 'upcoming') {
        timerHTML = `
            <div class="highlight-timer">
                <i class="far fa-clock"></i> Match starts in: 
                <span id="highlightTimerDays">00</span>d 
                <span id="highlightTimerHours">00</span>h 
                <span id="highlightTimerMins">00</span>m 
                <span id="highlightTimerSecs">00</span>s
            </div>
        `;
        
        // Start countdown for highlight match
        startHighlightCountdown(matchDate);
    } else if (match.status === 'live') {
        timerHTML = `
            <div class="highlight-timer live">
                <i class="fas fa-bolt"></i> LIVE NOW: ${match.result}
            </div>
        `;
    } else if (match.status === 'completed') {
        timerHTML = `
            <div class="highlight-timer completed">
                <i class="fas fa-check-circle"></i> ${match.result}
            </div>
        `;
    }
    
    highlightMatchContainer.innerHTML = `
        <div class="highlight-teams">
            <div class="highlight-team">
                <img src="${team1.logo}" alt="${team1.name}" class="highlight-team-logo">
                <span class="highlight-team-name">${team1.name}</span>
                ${match.status !== 'upcoming' ? `<div class="highlight-score">${match.team1Score}</div>` : ''}
            </div>
            <span class="highlight-vs">vs</span>
            <div class="highlight-team">
                <img src="${team2.logo}" alt="${team2.name}" class="highlight-team-logo">
                <span class="highlight-team-name">${team2.name}</span>
                ${match.status !== 'upcoming' ? `<div class="highlight-score">${match.team2Score}</div>` : ''}
            </div>
        </div>
        <div class="highlight-info">
            <p><i class="far fa-calendar-alt"></i> ${new Date(match.date).toDateString()}, ${match.time}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${match.venue}</p>
            ${timerHTML}
        </div>
        <button class="btn-view-details" data-match-id="${match.id}">View Match Details</button>
    `;
    
    // Add event listener to view details button
    const viewDetailsBtn = highlightMatchContainer.querySelector('.btn-view-details');
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', () => {
            openMatchModal(match);
        });
    }
}

function startHighlightCountdown(matchDate) {
    const updateHighlightTimer = () => {
        const now = new Date();
        const distance = matchDate - now;
        
        if (distance <= 0) {
            // Match has started, reload the highlight
            renderHighlightMatch();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('highlightTimerDays');
        const hoursEl = document.getElementById('highlightTimerHours');
        const minsEl = document.getElementById('highlightTimerMins');
        const secsEl = document.getElementById('highlightTimerSecs');
        
        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minsEl) minsEl.textContent = minutes.toString().padStart(2, '0');
        if (secsEl) secsEl.textContent = seconds.toString().padStart(2, '0');
    };
    
    updateHighlightTimer();
    const timerInterval = setInterval(updateHighlightTimer, 1000);
    
    // Clean up interval when component unmounts
    return () => clearInterval(timerInterval);
}

function renderMatches() {
    matchesContainer.innerHTML = '';
    
    matches.forEach(match => {
        const team1 = teams.find(t => t.shortName === match.team1);
        const team2 = teams.find(t => t.shortName === match.team2);
        
        const matchCard = document.createElement('div');
        matchCard.className = `match-card ${match.status === 'live' ? 'live' : ''}`;
        matchCard.innerHTML = `
            <div class="match-teams">
                <div class="team">
                    <img src="${team1.logo}" alt="${team1.name}" class="team-logo">
                    <span class="team-name">${team1.shortName}</span>
                </div>
                <span class="match-vs">vs</span>
                <div class="team">
                    <img src="${team2.logo}" alt="${team2.name}" class="team-logo">
                    <span class="team-name">${team2.shortName}</span>
                </div>
            </div>
            <div class="match-info">
                <p>${match.venue}</p>
                <p>${new Date(match.date).toDateString()}, ${match.time}</p>
                ${match.status === 'live' ? `<p>${match.team1Score} vs ${match.team2Score}</p>` : ''}
                <span class="match-status ${match.status}-status">
                    ${match.status === 'live' ? 'Live' : match.status === 'completed' ? 'Completed' : 'Upcoming'}
                </span>
            </div>
        `;
        
        matchCard.addEventListener('click', () => openMatchModal(match));
        matchesContainer.appendChild(matchCard);
    });
}

function openMatchModal(match) {
    const team1 = teams.find(t => t.shortName === match.team1);
    const team2 = teams.find(t => t.shortName === match.team2);
    const matchDate = new Date(`${match.date}T${match.time}:00`);
    const now = new Date();
    const timeUntilMatch = matchDate - now;
    
    let timerHTML = '';
    if (timeUntilMatch > 0 && match.status === 'upcoming') {
        timerHTML = `
            <div class="modal-timer">
                <i class="far fa-clock"></i> Match starts in: 
                <span id="modalTimerDays">00</span>d 
                <span id="modalTimerHours">00</span>h 
                <span id="modalTimerMins">00</span>m 
                <span id="modalTimerSecs">00</span>s
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-match-teams">
            <div class="modal-team">
                <img src="${team1.logo}" alt="${team1.name}" class="modal-team-logo">
                <h3>${team1.name}</h3>
                ${match.status !== 'upcoming' ? `<p class="modal-team-score">${match.team1Score}</p>` : ''}
            </div>
            <div class="modal-vs">vs</div>
            <div class="modal-team">
                <img src="${team2.logo}" alt="${team2.name}" class="modal-team-logo">
                <h3>${team2.name}</h3>
                ${match.status !== 'upcoming' ? `<p class="modal-team-score">${match.team2Score}</p>` : ''}
            </div>
        </div>
        <div class="modal-match-info">
            <p><strong>Date & Time:</strong> ${new Date(match.date).toDateString()}, ${match.time}</p>
            <p><strong>Venue:</strong> ${match.venue}</p>
            ${match.status === 'completed' ? `<p class="modal-result"><strong>Result:</strong> ${match.result}</p>` : ''}
            ${match.status === 'live' ? `<p class="modal-result"><strong>Status:</strong> ${match.result}</p>` : ''}
        </div>
        ${timerHTML}
    `;
    
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
    
    // Start countdown if match is upcoming
    if (timeUntilMatch > 0 && match.status === 'upcoming') {
        const updateModalTimer = () => {
            const now = new Date();
            const distance = matchDate - now;
            
            if (distance <= 0) {
                // Match has started, reload the modal
                openMatchModal(match);
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('modalTimerDays');
            const hoursEl = document.getElementById('modalTimerHours');
            const minsEl = document.getElementById('modalTimerMins');
            const secsEl = document.getElementById('modalTimerSecs');
            
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minsEl) minsEl.textContent = minutes.toString().padStart(2, '0');
            if (secsEl) secsEl.textContent = seconds.toString().padStart(2, '0');
        };
        
        updateModalTimer();
        const timerInterval = setInterval(updateModalTimer, 1000);
        
        // Clean up when modal closes
        const clearOnClose = () => {
            clearInterval(timerInterval);
            modal.removeEventListener('click', clearOnClose);
        };
        
        modal.addEventListener('click', clearOnClose);
    }
    
    // Add animation
    gsap.from('.modal-content', {
        duration: 0.3,
        scale: 0.9,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
}

function openTeamModal(team) {
    teamModalBody.innerHTML = `
        <div class="team-modal-content">
            <div class="team-modal-header">
                <img src="${team.logo}" alt="${team.name}" class="team-modal-logo">
                <div class="team-modal-info">
                    <h2>${team.name}</h2>
                    <p>${team.shortName}</p>
                </div>
            </div>
            
            <div class="team-modal-details">
                <div class="team-modal-detail">
                    <h3>Captain</h3>
                    <p>${team.captain}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Coach</h3>
                    <p>${team.coach}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Home Ground</h3>
                    <p>${team.homeGround}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Matches</h3>
                    <p>${team.matches}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Wins</h3>
                    <p>${team.wins}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Losses</h3>
                    <p>${team.losses}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Points</h3>
                    <p>${team.points}</p>
                </div>
                <div class="team-modal-detail">
                    <h3>Net Run Rate</h3>
                    <p>${team.nrr > 0 ? '+' : ''}${team.nrr}</p>
                </div>
            </div>
        </div>
    `;
    
    teamModal.classList.add('active');
    document.body.classList.add('no-scroll');
    
    // Add animation
    gsap.from('.modal-content', {
        duration: 0.3,
        scale: 0.9,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
}

function closeModal() {
    modal.classList.remove('active');
    teamModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function renderPointsTable() {
    pointsTableBody.innerHTML = '';
    
    // Sort teams by points and NRR
    const sortedTeams = [...teams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.nrr - a.nrr;
    });
    
    sortedTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${team.logo}" alt="${team.name}" class="team-logo-small"> ${team.name}</td>
            <td>${team.matches}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.noResult}</td>
            <td>${team.points}</td>
            <td>${team.nrr > 0 ? '+' : ''}${team.nrr.toFixed(2)}</td>
        `;
        pointsTableBody.appendChild(row);
    });
}

function renderTeams() {
    teamsGrid.innerHTML = '';
    
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-profile';
        teamCard.innerHTML = `
            <img src="${team.logo}" alt="${team.name}" class="team-profile-logo">
            <h3 class="team-profile-name">${team.name}</h3>
            <p class="team-profile-captain">Captain: ${team.captain}</p>
        `;
        teamCard.addEventListener('click', () => openTeamModal(team));
        teamsGrid.appendChild(teamCard);
    });
}

function renderStats(statType) {
    let stats = [];
    let headers = [];
    
    switch(statType) {
        case 'batting':
            stats = battingStats;
            headers = ['Player', 'Team', 'Matches', 'Runs', 'Avg', 'SR', 'HS', '4s', '6s'];
            break;
        case 'bowling':
            stats = bowlingStats;
            headers = ['Player', 'Team', 'Matches', 'Wkts', 'Avg', 'Econ', 'Best'];
            break;
        case 'fielding':
            stats = fieldingStats;
            headers = ['Player', 'Team', 'Matches', 'Catches', 'Stumpings', 'Run Outs'];
            break;
    }
    
    statsContainer.innerHTML = `
        <table>
            <thead>
                <tr>
                    ${headers.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${stats.map(player => `
                    <tr>
                        <td>
                            <img src="https://i.imgur.com/0zk7NJY.jpeg" alt="${player.player}" class="player-avatar">
                            ${player.player}
                        </td>
                        <td>${player.team}</td>
                        <td>${player.matches}</td>
                        ${statType === 'batting' ? `
                            <td>${player.runs}</td>
                            <td>${player.avg}</td>
                            <td>${player.sr}</td>
                            <td>${player.hs}</td>
                            <td>${player.fours}</td>
                            <td>${player.sixes}</td>
                        ` : ''}
                        ${statType === 'bowling' ? `
                            <td>${player.wickets}</td>
                            <td>${player.avg}</td>
                            <td>${player.econ}</td>
                            <td>${player.best}</td>
                        ` : ''}
                        ${statType === 'fielding' ? `
                            <td>${player.catches}</td>
                            <td>${player.stumpings}</td>
                            <td>${player.runOuts}</td>
                        ` : ''}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderNews() {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = '';
    
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="news-image">
            <div class="news-content">
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.excerpt}</p>
                <p class="news-date"><i class="far fa-calendar-alt"></i> ${item.date}</p>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}


// Footer animations with GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Animate footer elements on scroll into view
    gsap.from(".footer-logo", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".footer-links a", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: "back.out"
    });

    gsap.from(".social-icons a", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.6,
        ease: "elastic.out(1, 0.5)"
    });

    // Continuous subtle animation for social icons
    gsap.to(".social-icons a", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

function renderSchedule() {
    const scheduleTable = document.querySelector('.schedule-table');
    scheduleTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Match</th>
                    <th>Date & Time</th>
                    <th>Venue</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${matches.map(match => {
                    const team1 = teams.find(t => t.shortName === match.team1);
                    const team2 = teams.find(t => t.shortName === match.team2);
                    
                    return `
                        <tr>
                            <td>
                                <div class="schedule-match-teams">
                                    <img src="${team1.logo}" alt="${team1.name}" class="schedule-team-logo">
                                    <span>vs</span>
                                    <img src="${team2.logo}" alt="${team2.name}" class="schedule-team-logo">
                                </div>
                                <div>${team1.shortName} vs ${team2.shortName}</div>
                            </td>
                            <td>${new Date(match.date).toDateString()}, ${match.time}</td>
                            <td>${match.venue}</td>
                            <td>
                                <span class="match-status ${match.status}-status">
                                    ${match.status === 'live' ? 'Live' : match.status === 'completed' ? 'Completed' : 'Upcoming'}
                                </span>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
    
    // Add event listeners to schedule rows
    const scheduleRows = scheduleTable.querySelectorAll('tbody tr');
    scheduleRows.forEach((row, index) => {
        row.addEventListener('click', () => {
            openMatchModal(matches[index]);
        });
    });
}

// Event Listeners
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
themeToggle.addEventListener('click', toggleTheme);
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

document.addEventListener('click', (e) => {
    if (e.target === modal || e.target === teamModal) {
        closeModal();
    }
});

statsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        statsTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderStats(tab.dataset.stat);
    });
});

// Initialize
function init() {
    // Set theme from localStorage or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.setAttribute('data-theme', savedTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', savedTheme === 'light');
    icon.classList.toggle('fa-sun', savedTheme === 'dark');
    
    // Render all components
    updateCountdown();
    renderHighlightMatch();
    renderMatches();
    renderPointsTable();
    renderTeams();
    renderStats('batting');
    renderNews();
    renderSchedule();
    
    // Set intervals
    setInterval(updateCountdown, 1000);
}

// Initialize the app
init()