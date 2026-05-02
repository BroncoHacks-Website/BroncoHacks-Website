import HOF2025 from './HOF2025';
import HOF2025Cat from './HOF2025_cat';
import HOF2026 from './HOF2026';
import HOF2026Cat from './HOF2026_cat';

const hof = [
    {
        id: 0,
        year: 2025,
        description: 
            <>
                BroncoHacks 2025 took place from April 18 2025 - April 19 2025.
                There were over 200 participants across six categories:
                Best Web Development, Best Cybersecurity, Best Data Science/AI,
                Best Game Development, Best UI/UX, Best Team Name, and Overall Placements.
                Participants spent 24 hours hacking together on a project with the theme of{" "}
                <span className="section-theme-text">
                “Create a project for a problem in a community.”
                </span>"
            </>,
        mainWinners: HOF2025,
        categoryWinners: HOF2025Cat,
    },
    {
        id: 1,
        year: 2026,
        description: 
            <>
                BroncoHacks 2026 took place from April 25 - April 26, 2026.
                There were over 200 participants across 
                <span className="section-theme-text">
                    &nbsp;3 main tracks: Education, Fitness, and Sustainability
                </span>
                &nbsp;&mdash;&nbsp;
                <span className="section-theme-text">
                    6 special awards: Best Hardware, Best Beginner, Best Use of Vercel, 
                    Best AI/ML, Best UI/UX, Best Cybersecurity
                </span> 
                &nbsp;&mdash;&nbsp;as well as&nbsp;
                <span className="section-theme-text">
                    5 MLH sponsor tracks: Best Use of Google Gemini API, 
                    Best Use of ElevenLabs, Best Use of Solana, Best Use of Auth0 Login, 
                    Best Use of Backboard
                </span>.
            </>,
        mainWinners: HOF2026,
        categoryWinners: HOF2026Cat,
    }
];

export default hof;